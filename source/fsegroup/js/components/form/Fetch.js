export default class Fetch {
    static async request(formData) {
        let fetchResp = await fetch('/', {
            method: 'POST',
            headers: {  
            "X-Requested-With": "XMLHttpRequest" 
            },  
            body: formData
        })
        if (!fetchResp.ok) {
            throw new Error(`Ошибка, статус ошибки ${fetchResp.status}`)
        }
    return await fetchResp.text()    
    }
 }