let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://kitsu.io/api/edge/anime', false);
xhr.send();
let array = JSON.parse(xhr.responseText);
let main = document.getElementById("01a");
let templateCatalog = document.getElementById('template-catalog').innerHTML;
let templateCard = document.getElementById('template-card').innerHTML;
let templateAbout = document.getElementById('template-about').innerHTML;
let templateContacts = document.getElementById('template-contacts').innerHTML
let contactsArray = {"YouTube":"https://www.youtube.com/",
"VK":"https://vk.com/",
"OK":"https://ok.ru/",
"Discord":"https://discord.com/",
"Google":"https://www.google.com/",
"ICQ":"https://www.icq.com/",
}

function renderCat(){
    for (let i = 0; i < array['data'].length; i++) {
        // document.getElementById('01a').innerHTML += `
        // <div class='anime-card' id=${i}>
        
        //     <img src='${array['data'][i]['attributes']['posterImage']['medium']}'>
        //     <span class='anime-title-name fBlender-bold'>
        //         ${array['data'][i]['attributes']['titles']['en_jp']}
        //     </span>
        //     <span class='arrowright'>

        //     </span>
        // </div>
        // `;
        main.innerHTML += templateCatalog.replace('---title',array['data'][i]['attributes']['titles']['en_jp'])
                                        .replace('---id',array['data'][i]['id'])
                                        .replace('---imgSrc',array['data'][i]['attributes']['posterImage']['medium']) ;
    
    }

}
function clearPage(){
    document.getElementById('01a').innerHTML = ' '
}
function btnCatalog(){
    clearPage();
	renderCat();
}
function btnAbout(){
    clearPage();
    main.innerHTML += templateAbout;

}
function btnContact(){
    clearPage();
    main.innerHTML += templateContacts.replace('---linkYoutube',contactsArray['YouTube'])
                                    .replace('---linkVK',contactsArray['VK'])
                                    .replace('---linkOK',contactsArray['OK'])
                                    .replace('---linkDiscord',contactsArray['Discord'])
                                    .replace('---linkGoogle',contactsArray['Google'])
                                    .replace('---linkICQ',contactsArray['ICQ'])
}
function renderCard(id){
    clearPage();
    main.innerHTML += templateCard.replace('---imgSrc',array['data'][id-1]['attributes']['posterImage']['medium'])
                                .replace('---title',array['data'][id-1]['attributes']['titles']['en_jp'])
                                .replace('---averageRating',array['data'][id-1]['attributes']['averageRating'])
                                .replace('---favoritesCount',array['data'][id-1]['attributes']['favoritesCount'])
                                .replace('---ageRating',array['data'][id-1]['attributes']['ageRating'])
                                .replace('---description',array['data'][id-1]['attributes']['description'])
                                .replace('---subtype',array['data'][id-1]['attributes']['subtype'])
                                .replace('---status',array['data'][id-1]['attributes']['status'])
                                .replace('---startDate',array['data'][id-1]['attributes']['startDate'])
                                .replace('---endDate',array['data'][id-1]['attributes']['endDate'])
}
window.onload = renderCat()


    // //находим коробку под карточки
    // let main = document.querySelector('main');

    // //получаем текст шаблона каталога
    // let templateCatalog = document.getElementById('tmpl-catalog').innerHTML;

    // //получаем текст шаблона карточки
    // let templateCard = document.getElementById('tmpl-card').innerHTML;

    // //вызываем функцию при загрузке страницы
    // renderCatalog();

    // //функция отрисовки каталога
    // function renderCatalog() {

    //     //очищаем страницу
    //     clearPage();

    //     //получаем данные каталога
    //     let json = sendRequestGet("https://kitsu.io/api/edge/anime" );

    //     //раскодируем данные
    //     let data = JSON.parse(json);

    //     //рисуем данные на экран
    //     for (let i = 0; i < data['data'].length; i++ ) {

    //         //заполняем шаблон и выводим на экран
    //         main.innerHTML += templateCatalog.replace('${title}',data['data'][i]['attributes']['titles']['en'])
    //                                          .replace('${id}',data['data'][i]['id'])
    //                                          .replace('${photo}',data['data'][i]['attributes']['posterImage']['large']) ;
            
    //     }
    // }

    // //функция отрисовки карточки
    // function renderCard(id) {

    //     //очищаем страницу
    //     clearPage();
        
    //     //получаем данные каталога
    //     let json = sendRequestGet("https://kitsu.io/api/edge/anime/" + id);

    //     //раскодируем данные
    //     let data = JSON.parse(json);

    //     //заполняем шаблон и выводим на экран
    //     main.innerHTML += templateCard.replace('${title}',data['data']['attributes']['titles']['en'])
    //                               .replace('${photo}',data['data']['attributes']['posterImage']['large']) ;
            
    // }

    // //функция очитски страницы
    // function clearPage() {
    //     main.innerHTML = '';
    // }

    // //функция для отправки запросов
    // function sendRequestGet(url) {

    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET',url,false);
    //     xhr.send();

    //     return xhr.responseText;

    // }





    // <div class='anime-info'>
    //             <div>
    //                 <span>${array['data'][i]['attributes']['averageRating']}</span>
    //                 <span>${array['data'][i]['attributes']['favoritesCount']}</span>
    //                 <span>${array['data'][i]['attributes']['ageRating']}</span>
    //                 <span>${array['data'][i]['attributes']['subtype']}</span>
    //             </div>
    //             <div>
    //                 <span>${array['data'][i]['attributes']['status']}</span>
    //                 <span>${array['data'][i]['attributes']['startDate']}</span>
    //                 <span>${array['data'][i]['attributes']['endDate']}</span>
                        // <span>${array['data'][i]['attributes']['description']}</span>
    //             </div>
    //         </div>