
//  load document dlu bos

document.addEventListener('DOMContentLoaded',()=> {

    let textO = document.createTextNode("🔘")
    let textX = document.createTextNode("❌")

    let turn = false
    let singlePlayer = true

    const allBox = document.querySelectorAll('.box')
    const  whoTurn = document.getElementById('whoTurn')
    const restart = document.querySelector('.restart')
    const changeGame = document.querySelectorAll('.changeGame')

    // allBox[1].appendChild(textO)
    // allBox[0].appendChild(textO)

    const score = document.querySelectorAll('#score')
    if (singlePlayer){
        score[1].Value = 0
        score[2].Value = 0
        score[1].textContent = "Player (❌) " + ' : ' + score[1].Value 
        score[2].textContent = "Robot  (🔘) "+ ' : ' + score[2].Value 
    }else{
        score[1].Value = 0
        score[2].Value = 0
        score[1].textContent = textX.textContent + ' : ' + score[1].Value 
        score[2].textContent = textO.textContent + ' : ' + score[2].Value 
    }

    allBox.forEach((e,k,p) => {
        // e.appendChild(document.createTextNode(textO.textContent))
        // e.appendChild(document.createTextNode(textX.textContent))
    })

    document.addEventListener('click',(e) =>{
        if (singlePlayer){
            console.log("as")
            if(!turn){
                console.log("as")
                if (e.target.textContent == '' )
                    {
                    console.log("as")
                    addTextNode(e.target)
                    // bot bakal ngikutin ekekek
                    let getTarget = 0
                    allBox.forEach((el)=>{
                        if(el != e.target){
                            if(el.textContent == ''){
                                getTarget = el
                            }
                        }
                    })
                    if(getTarget != 0){
                        addTextNode(getTarget)
                    }
                }
            }
        }else{
            if(e.target.textContent == ''){addTextNode(e.target)}
        }
    })




    function addTextNode(target){
        if (turn){
            target.appendChild(document.createTextNode(textO.textContent))
            // whoTurn.textContent = 'Who Turn Now : ' + textX.textContent
            whoTurn.textContent =  textX.textContent
            turn = false
        }else{
            target.appendChild(document.createTextNode(textX.textContent))
            // whoTurn.textContent = 'Who Turn Now : ' + textO.textContent
            whoTurn.textContent =  textO.textContent
            turn = true
        }
        // if (allBox[0].textContent == textO.textContent && allBox[0].textContent == textO.textContent && allBox[2].textContent == textO.textContent){
        //     alert("The Winner Is " + textO.textContent)
        // }

        allBox.forEach((e1)=>{
            allBox.forEach((e2)=>{
                allBox.forEach((e3)=>{
                    if(e1 != e2 && e2 != e3 && e1 != e3){
                        // Bagian Horizontal
                        if(e1 == allBox[0] && e2 == allBox[1] && e3 == allBox[2]){
                            if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }else if(e1 == allBox[3] && e2 == allBox[4] && e3 == allBox[5]){
                             if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }else if(e1 == allBox[6] && e2 == allBox[7] && e3 == allBox[8]){
                            if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }
                        // Bagian Vertica;
                        if(e1 == allBox[0] && e2 == allBox[3] && e3 == allBox[6]){
                            if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }else if(e1 == allBox[1] && e2 == allBox[4] && e3 == allBox[7]){
                             if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }else if(e1 == allBox[2] && e2 == allBox[5] && e3 == allBox[8]){
                            if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }
                        // Bagian Silang
                        if(e1 == allBox[0] && e2 == allBox[4] && e3 == allBox[8]){
                            if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }
                        if(e1 == allBox[2] && e2 == allBox[4] && e3 == allBox[6]){
                            if(e1.textContent == textO.textContent && e2.textContent == textO.textContent && e3.textContent == textO.textContent){
                                pemenang(2)
                                return
                            }else if(e1.textContent == textX.textContent && e2.textContent == textX.textContent && e3.textContent == textX.textContent){
                                pemenang(1)
                                return
                            }
                        }
                    }
                })
            })
        })

    }

    // restart Button
    restart.addEventListener('click',()=>{
        restartButton()
    })

    // change player button
    changeGame[1].addEventListener('click',()=>{
       if(singlePlayer){
            changeGame[0].textContent = 'Player Vs Player'
            changeGame[1].textContent = '🙍‍♂️'
            changeGame[2].textContent = 'Change Player To Robot?'
            score[2].textContent = 'Player (🔘) : ' + score[2].Value
            restartButton()
            singlePlayer = false
       }else{
            changeGame[0].textContent = 'Player Vs Computer'
            changeGame[1].textContent = '🤖'
            changeGame[2].textContent = 'Change Robot To Player?'
            score[2].textContent = 'Robot (🔘) : ' + score[2].Value
            restartButton()
            singlePlayer = true
       }
    })


    // function Buat Restart
    function restartButton(){
        allBox.forEach((e) => {
            e.textContent = ''
            turn = false
            whoTurn.textContent =  textX.textContent
        })
    }


    // function menghitung score
    function countScore(){
        // jika Score Pemain X Lebih Besar Maka
        if (singlePlayer){
            score[1].textContent = "Player (❌): " + ' : ' + score[1].Value 
            score[2].textContent = "Robot (🔘): "+ ' : ' + score[2].Value 
        }else{
            score[1].textContent = textX.textContent + ' : ' + score[1].Value 
            score[2].textContent = textO.textContent + ' : ' + score[2].Value 
        }
        if (singlePlayer){
            if(score[1].Value == score[2].Value){
                score[0].textContent = 'Pemain Top : DRAW' 
                
            }else if (score[1].Value > score[2].Value){
                score[0].textContent = 'Pemain Top : Player'
            // jika Score Pemain O Lebih Besar Maka
            }else{
                score[0].textContent = 'Pemain Top : Robot' 
            }
        }else{
            if(score[1].Value == score[2].Value){
                score[0].textContent = 'Pemain Top : DRAW' 
                
            }else if (score[1].Value > score[2].Value){
                score[0].textContent = 'Pemain Top ' + textX.textContent
            // jika Score Pemain O Lebih Besar Maka
            }else{
                score[0].textContent = 'Pemain Top ' + textO.textContent
            }
        }
    }

    // function mengdeklrasikan pemenang()
    function pemenang(typeApa)  // jika 1 maka X dan Jika 2 Maka O
    {
        switch (typeApa){
            // Jika Yang Menang Adalah X
            case 1:
                alert("The Winner Is : ❌")
                score[1].Value += 1
                break
            case 2:
                alert("The Winner Is : 🔘")
                score[2].Value += 1
                break
        }
        countScore()
        restartButton()
    }

   


})