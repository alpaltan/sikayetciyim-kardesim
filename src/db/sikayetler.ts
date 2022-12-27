interface SikayetOzellik {
    SirketAdi: string,
    SikayetEdenKullaniciAdi: string,
    SikayetBasligi: string,
    Tarih: string,
    CevapDurumu: boolean,
    Goruntulenme: number,
    SikayetMetni: string,
    SikayetNumarasi: number
}


export const Sikayet: Array<SikayetOzellik> = [
    {
        SirketAdi: "Yemeksepeti",
        SikayetEdenKullaniciAdi: "Ziya Bozlar",
        SikayetBasligi: "Paramı Vermediler",
        Tarih: "25.12.2022",
        CevapDurumu: false,
        Goruntulenme: 5,
        SikayetMetni: "Geçenlerde bir outlet mağazasından bir çift ayakkabı satın aldım ve sadece birkaç giymeden sonra dağılmaya başladıklarını görünce çok hayal kırıklığına uğradım. Ayakkabının tabanı sayadan ayrılmaya, burun kısmındaki dikişler açılmaya başladı. Bu markadan daha iyi kalite bekliyordum ve satın aldığımdan çok mutsuzum. Bu outlet mağazasından alışveriş yapmanızı tavsiye etmem",
        SikayetNumarasi: 1,
    }
]