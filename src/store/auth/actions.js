import { api } from 'boot/axios'

export const actionLogin = async ({ rootGetters, state }, payload) => {
    const { 
        level_lingkup_kerja , 
        id_lingkup_kerja,
        id_satker,
        id_sub_satker,
        nrp
    } = payload
    const request = {
        level_lingkup_kerja : level_lingkup_kerja,
        id_lingkup_kerja :id_lingkup_kerja,
        id_satker  :id_satker,
        id_sub_satker :id_sub_satker,
        nrp  :nrp,
    };
    return api.post('anggota/loginv2', request)
};


export const actionSendOTP = async ({ rootGetters, state }, payload) => {
    const { 
        nomor_telepon  
    } = payload
    const request = {
        nomor_telepon : nomor_telepon 
    };
    return api.post('anggota-otp/send-otp', request)
};

export const actionVerifyOTP = async ({ rootGetters, state }, payload) => {
    const { 
        nomor_telepon,
        kodeOTP  
    } = payload
    const request = {
        nomor_telepon : nomor_telepon,
        otp :  kodeOTP
    };
    return api.post('anggota-otp/verifikasi-otp', request)
};
 
 
