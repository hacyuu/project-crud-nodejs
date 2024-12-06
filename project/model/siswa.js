const mongoose = require('mongoose');

//! Membuat Skema siswa
const SiswaSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
    },
    jk: {
        type: String,
        required: true,
    },
    nisn: {
        type: String,
        required: true,
    },
    nik: {
        type: String,
        required: true,
    },
    nokk: {
        type: String,
        required: true,
    },
    tingkat: {
        type: String,
        required: true,
    },
    rombel: {
        type: String,
        required: true,
    },
    terdaftar: {
        type: String,
        required: true,
    },
    ttl: {
        type: String,
        required: true,
    },
    tgl_masuk: {
        type: String,
        required: true,
    }
    // timestamp: {
    //     type: Date,
    //     default: Date.now,
    // }
}, );

const Siswa = mongoose.model('siswa', SiswaSchema);

// new Siswa({
//     nama: 'hacyuu',
//     jk: 'Laki-Laki',
//     nisn: '1232925',
//     nik: '23434',
//     nokk: '2354345',
//     tingkat: 'XI',
//     rombel: 'RPL 1',
//     terdaftar: "Si  swa Baru",
//     ttl: 'Cirebon, 07 Mei 2008',
//     tgl_masuk: '2024-11-24',
// }).save();
module.exports = Siswa;