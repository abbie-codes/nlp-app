function updateUI(body) {
    let article = document.getElementById('url').value;
    let results = document.querySelector('.results');
    let validation = document.querySelector('.validation');
    let textTable = document.querySelector('#text-snippets');

    if (body.agreement == undefined) {
        let notFound = document.createElement('p');
        notFound.innerHTML = "URL not found, please enter a valid URL";
        notFound.setAttribute('class', 'validation')
        validation.appendChild(notFound);
    } else {
        results.style.display = 'block';
        const tdArray = document.getElementsByTagName('td');
        tdArray[0].innerHTML = article;
        tdArray[1].innerHTML = body.agreement;
        tdArray[2].innerHTML = body.subjectivity;
        tdArray[3].innerHTML = body.irony;
        tdArray[4].innerHTML = body.confidence;

        let sentenceList = body.sentence_list;
        for (let sentence of sentenceList) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            td1.innerHTML = sentence.text;
            td2.innerHTML = sentence.agreement;
            td3.innerHTML = sentence.confidence;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            textTable.appendChild(tr);
        }
    }
}

export { updateUI };