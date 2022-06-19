let handleSubmit = async (e) => {
    e.preventDefault();
    const urlInput = document.getElementById('url');
    const { value } = urlInput;
    const body = await Client.postData('http://localhost:8081/api', {url: value});
    Client.updateUI(body);
}

export { handleSubmit };