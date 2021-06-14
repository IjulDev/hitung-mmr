const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    let mmrAwal = parseInt(document.getElementById('mmrAwal').value)
    let mmrTarget = parseInt(document.getElementById('mmrTarget').value)
    const hasil = document.querySelector('.result')

    let sisaMmr = mmrTarget - mmrAwal
    let result

    if (mmrAwal > mmrTarget) {
        alert('Jangan diturunin dong MMR nya :(')
        location.reload()
    }
    document.querySelector('.mmr-target').textContent = mmrTarget

    if (mmrAwal < 2000) {
        if(mmrTarget >= 3500) {
            var total1 = (mmrTarget - 3499) / 1
            let krg = mmrTarget - 3499
            mmrTarget -= krg
            if(mmrTarget >= 2000 && mmrTarget < 3500) {
                var total2 = (mmrTarget - 1999) / 7
                krg = mmrTarget - 1999
                mmrTarget -= krg
                if(mmrTarget < 2000) {
                    sisaMmr = mmrTarget - mmrAwal
                }
            }
            result = total1 + total2 + (sisaMmr / 20)
        } else if (mmrTarget >= 2000 && mmrTarget < 3500) {
            var total1 = (mmrTarget - 1999) / 7
            let krg = mmrTarget - 1999
            mmrTarget -= krg
            if(mmrTarget < 2000) {
                sisaMmr = mmrTarget - mmrAwal
            }
            result = total1 + (sisaMmr / 20)
        } else {
            result = sisaMmr / 20
        }
    } else if (mmrAwal >= 2000 && mmrAwal < 3500) {
        if(mmrTarget >= 3500) {
            var total1 = (mmrTarget - 3499) / 1
            let krg = mmrTarget - 3499
            mmrTarget -= krg
            if(mmrTarget >= 2000 && mmrTarget < 3500) {
                sisaMmr = mmrTarget - mmrAwal
            }
            result = total1 + (sisaMmr / 7)
        } else {
            result = sisaMmr / 7
        }
    } else if (mmrAwal >= 3500) {
        result = sisaMmr / 1
    }
    
    hasil.textContent = Math.ceil(result)
    
})
