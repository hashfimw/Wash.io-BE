"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBypassRequestByIdService = exports.getBypassRequestsService = exports.handleBypassRequestService = exports.requestBypassService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const client_1 = require("../../../prisma/generated/client");
const node_cron_1 = __importDefault(require("node-cron"));
// Service untuk worker request bypass
const requestBypassService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const userId = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    const { laundryJobId, byPassNote } = req.body;
    const worker = yield prisma_1.default.user.findUnique({
        where: { id: userId },
        include: {
            Employee: true,
        },
    });
    if (!worker || !worker.Employee) {
        throw new Error("Data worker tidak ditemukan");
    }
    const updatedLaundryJob = yield prisma_1.default.laundryJob.update({
        where: { id: Number(laundryJobId) },
        data: {
            isByPassRequested: true,
            byPassNote,
        },
    });
    // Cari outlet admin untuk notifikasi
    const outletAdmins = yield prisma_1.default.employee.findMany({
        where: {
            outletId: worker.Employee.outletId,
            user: {
                role: client_1.Role.OUTLET_ADMIN,
            },
        },
        include: {
            user: true,
        },
    });
    // Cari super admin untuk notifikasi
    const superAdmins = yield prisma_1.default.user.findMany({
        where: {
            role: client_1.Role.SUPER_ADMIN,
        },
    });
    // Kirim notifikasi ke outlet admin
    for (const admin of outletAdmins) {
        yield prisma_1.default.notification.create({
            data: {
                userId: admin.userId,
                title: "Permintaan Bypass Baru",
                description: `Worker ${worker.fullName} meminta bypass untuk Order #${laundryJobId}. Alasan: ${byPassNote}`,
                url: `/dashboard/outlet-admin/bypass/${laundryJobId}`,
            },
        });
    }
    // Kirim notifikasi ke super admin
    for (const admin of superAdmins) {
        yield prisma_1.default.notification.create({
            data: {
                userId: admin.id,
                title: "Permintaan Bypass Baru",
                description: `Worker ${worker.fullName} meminta bypass untuk Order #${laundryJobId} di outlet ${worker.Employee.outletId}. Alasan: ${byPassNote}`,
                url: `/dashboard/super-admin/bypass/${laundryJobId}`,
            },
        });
    }
    return { data: updatedLaundryJob };
});
exports.requestBypassService = requestBypassService;
// Service untuk admin handle bypass request
const handleBypassRequestService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    // Cek role pengguna dengan mengambil dari database
    const userId = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    const user = yield prisma_1.default.user.findUnique({
        where: { id: userId },
        include: {
            Employee: true,
        },
    });
    if (!user ||
        (user.role !== client_1.Role.SUPER_ADMIN && user.role !== client_1.Role.OUTLET_ADMIN)) {
        throw new Error("Hanya Super Admin dan Outlet Admin yang dapat menangani permintaan bypass");
    }
    const { laundryJobId, isApproved, adminNote } = req.body;
    // Logika berbeda berdasarkan role
    if (user.role === client_1.Role.SUPER_ADMIN) {
        // Super admin bisa handle bypass dari semua outlet
        const laundryJob = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            // Dapatkan informasi job saat ini
            const currentJob = yield prisma.laundryJob.findUnique({
                where: { id: Number(laundryJobId) },
                include: {
                    worker: {
                        include: {
                            user: true,
                        },
                    },
                    order: true,
                },
            });
            if (!currentJob) {
                throw new Error("Laundry job tidak ditemukan");
            }
            // Proses bypass tanpa batasan outlet
            const job = yield prisma.laundryJob.update({
                where: { id: Number(laundryJobId) },
                data: {
                    byPassStatus: isApproved ? "ACCEPTED" : "REJECTED",
                    // Tambahkan catatan admin jika ada
                    byPassNote: adminNote
                        ? `${currentJob.byPassNote || ""}\n\nTanggapan Admin: ${adminNote}`
                        : currentJob.byPassNote,
                },
                include: {
                    worker: {
                        include: {
                            user: true,
                        },
                    },
                    order: true,
                },
            });
            // Notifikasi ke worker
            yield prisma.notification.create({
                data: {
                    userId: job.worker.userId,
                    title: isApproved
                        ? "Permintaan Bypass Disetujui"
                        : "Permintaan Bypass Ditolak",
                    description: isApproved
                        ? `Permintaan bypass Anda untuk Order #${job.order.id} telah disetujui oleh Super Admin. ${adminNote ? `Catatan: ${adminNote}` : ""}`
                        : `Permintaan bypass Anda untuk Order #${job.order.id} telah ditolak oleh Super Admin. ${adminNote
                            ? `Catatan: ${adminNote}`
                            : "Harap lengkapi data yang kurang dalam 30 menit."}`,
                    url: `/employee-dashboard/worker/${laundryJobId}`,
                },
            });
            // Jika ditolak, tambahkan timer 30 menit
            if (!isApproved) {
                // Catatan: Di produksi, sebaiknya gunakan job queue daripada cron
                const jobId = `${laundryJobId}_followup`;
                node_cron_1.default.schedule("*/30 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
                    var _a;
                    const checkJob = yield prisma.laundryJob.findUnique({
                        where: { id: Number(laundryJobId) },
                    });
                    if (checkJob && !checkJob.isCompleted) {
                        yield prisma.notification.create({
                            data: {
                                userId: job.worker.userId,
                                title: "Waktu Habis!",
                                description: `30 menit telah berlalu. Harap segera update item yang kurang untuk Order #${job.order.id}`,
                                url: `/employee-dashboard/worker/${laundryJobId}`,
                            },
                        });
                    }
                    // Hentikan task setelah dijalankan
                    (_a = node_cron_1.default.getTasks().get(jobId)) === null || _a === void 0 ? void 0 : _a.stop();
                }), {
                    scheduled: true,
                    name: jobId,
                });
            }
            return job;
        }));
        return { data: laundryJob };
    }
    else {
        // Outlet admin hanya bisa handle bypass di outlet miliknya
        const outletAdmin = yield prisma_1.default.employee.findUnique({
            where: { userId: user.id },
        });
        const laundryJob = yield prisma_1.default.laundryJob.findUnique({
            where: { id: Number(laundryJobId) },
            include: {
                worker: true,
            },
        });
        // Pastikan laundry job ada di outlet admin yang sama
        if (!laundryJob || ((_b = laundryJob.worker) === null || _b === void 0 ? void 0 : _b.outletId) !== (outletAdmin === null || outletAdmin === void 0 ? void 0 : outletAdmin.outletId)) {
            throw new Error("Tidak diizinkan menangani permintaan bypass ini");
        }
        // Proses bypass untuk outlet admin
        const updatedLaundryJob = yield prisma_1.default.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            // Dapatkan informasi job saat ini
            const currentJob = yield prisma.laundryJob.findUnique({
                where: { id: Number(laundryJobId) },
                include: {
                    worker: {
                        include: {
                            user: true,
                        },
                    },
                    order: true,
                },
            });
            if (!currentJob) {
                throw new Error("Laundry job tidak ditemukan");
            }
            const job = yield prisma.laundryJob.update({
                where: { id: Number(laundryJobId) },
                data: {
                    byPassStatus: isApproved ? "ACCEPTED" : "REJECTED",
                    // Tambahkan catatan admin jika ada
                    byPassNote: adminNote
                        ? `${currentJob.byPassNote || ""}\n\nTanggapan Admin: ${adminNote}`
                        : currentJob.byPassNote,
                },
                include: {
                    worker: {
                        include: {
                            user: true,
                        },
                    },
                    order: true,
                },
            });
            // Notifikasi ke worker
            yield prisma.notification.create({
                data: {
                    userId: job.worker.userId,
                    title: isApproved
                        ? "Permintaan Bypass Disetujui"
                        : "Permintaan Bypass Ditolak",
                    description: isApproved
                        ? `Permintaan bypass Anda untuk Order #${job.order.id} telah disetujui oleh Outlet Admin. ${adminNote ? `Catatan: ${adminNote}` : ""}`
                        : `Permintaan bypass Anda untuk Order #${job.order.id} telah ditolak oleh Outlet Admin. ${adminNote
                            ? `Catatan: ${adminNote}`
                            : "Harap lengkapi data yang kurang dalam 30 menit."}`,
                    url: `/dashboard/laundry-jobs/${laundryJobId}`,
                },
            });
            // Jika ditolak, tambahkan timer 30 menit
            if (!isApproved) {
                // Catatan: Di produksi, sebaiknya gunakan job queue daripada cron
                const jobId = `${laundryJobId}_followup`;
                node_cron_1.default.schedule("*/30 * * * *", () => __awaiter(void 0, void 0, void 0, function* () {
                    var _a;
                    const checkJob = yield prisma.laundryJob.findUnique({
                        where: { id: Number(laundryJobId) },
                    });
                    if (checkJob && !checkJob.isCompleted) {
                        yield prisma.notification.create({
                            data: {
                                userId: job.worker.userId,
                                title: "Waktu Habis!",
                                description: `30 menit telah berlalu. Harap segera update item yang kurang untuk Order #${job.order.id}`,
                                url: `/dashboard/laundry-jobs/${laundryJobId}`,
                            },
                        });
                    }
                    // Hentikan task setelah dijalankan
                    (_a = node_cron_1.default.getTasks().get(jobId)) === null || _a === void 0 ? void 0 : _a.stop();
                }), {
                    scheduled: true,
                    name: jobId,
                });
            }
            return job;
        }));
        return { data: updatedLaundryJob };
    }
});
exports.handleBypassRequestService = handleBypassRequestService;
// Service untuk mendapatkan semua permintaan bypass (untuk admin)
const getBypassRequestsService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const userId = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    // Dapatkan role pengguna dari database
    const user = yield prisma_1.default.user.findUnique({
        where: { id: userId },
        include: {
            Employee: true,
        },
    });
    if (!user) {
        throw new Error("Pengguna tidak ditemukan");
    }
    let bypassRequests;
    if (user.role === client_1.Role.SUPER_ADMIN) {
        // Super admin dapat melihat semua permintaan bypass
        bypassRequests = yield prisma_1.default.laundryJob.findMany({
            where: {
                isByPassRequested: true,
                isDeleted: false,
            },
            include: {
                order: true,
                worker: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                fullName: true,
                                email: true,
                                avatar: true,
                            },
                        },
                        outlet: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    else if (user.role === client_1.Role.OUTLET_ADMIN && ((_b = user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
        // Outlet admin hanya dapat melihat permintaan bypass dari outletnya
        const outletId = user.Employee.outletId;
        bypassRequests = yield prisma_1.default.laundryJob.findMany({
            where: {
                isByPassRequested: true,
                isDeleted: false,
                worker: {
                    outletId: outletId,
                },
            },
            include: {
                order: true,
                worker: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                fullName: true,
                                email: true,
                                avatar: true,
                            },
                        },
                        outlet: true,
                    },
                },
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    else {
        throw new Error("Akses tidak diizinkan");
    }
    return { data: bypassRequests };
});
exports.getBypassRequestsService = getBypassRequestsService;
// Service untuk mendapatkan permintaan bypass tertentu berdasarkan ID
const getBypassRequestByIdService = (req, res, id) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const userId = Number((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
    // Dapatkan role pengguna dari database
    const user = yield prisma_1.default.user.findUnique({
        where: { id: userId },
        include: {
            Employee: true,
        },
    });
    if (!user) {
        throw new Error("Pengguna tidak ditemukan");
    }
    // Temukan permintaan bypass
    const bypassRequest = yield prisma_1.default.laundryJob.findUnique({
        where: {
            id: id,
            isByPassRequested: true,
            isDeleted: false,
        },
        include: {
            order: true,
            worker: {
                include: {
                    user: {
                        select: {
                            id: true,
                            fullName: true,
                            email: true,
                            avatar: true,
                        },
                    },
                    outlet: true,
                },
            },
        },
    });
    if (!bypassRequest) {
        throw new Error("Permintaan bypass tidak ditemukan");
    }
    // Periksa izin berdasarkan peran
    if (user.role === client_1.Role.SUPER_ADMIN) {
        // Super admin dapat melihat semua permintaan
        return { data: bypassRequest };
    }
    else if (user.role === client_1.Role.OUTLET_ADMIN && ((_b = user.Employee) === null || _b === void 0 ? void 0 : _b.outletId)) {
        // Outlet admin hanya dapat melihat permintaan bypass dari outletnya
        if (((_c = bypassRequest.worker) === null || _c === void 0 ? void 0 : _c.outletId) !== user.Employee.outletId) {
            throw new Error("Anda tidak memiliki izin untuk melihat permintaan bypass ini");
        }
        return { data: bypassRequest };
    }
    else if (user.role === client_1.Role.WORKER) {
        // Worker hanya dapat melihat permintaan bypass mereka sendiri
        if (bypassRequest.workerId !== userId) {
            throw new Error("Anda tidak memiliki izin untuk melihat permintaan bypass ini");
        }
        return { data: bypassRequest };
    }
    else {
        throw new Error("Akses tidak diizinkan");
    }
});
exports.getBypassRequestByIdService = getBypassRequestByIdService;
