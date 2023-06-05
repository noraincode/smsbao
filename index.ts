import axios from 'axios'

const BASE_URL = 'https://api.smsbao.com' 

export class Client {
    private user_name: string
    private product_id: string
    private api_key: string

    constructor({user_name, product_id, api_key}: {user_name: string, product_id: string, api_key: string}) {
        this.user_name = user_name
        this.product_id = product_id
        this.api_key = api_key
    }

    sendSMS(send_to_phone_number: string, content: string) {
        const params = {
            u: this.user_name,
            p: this.api_key,
            m: send_to_phone_number,
            c: encodeURI(content),
            g: this.product_id,
        }

        return axios({
            url: `${BASE_URL}/sms`,
            method: 'get',
            params
        })
    }

    getQuota() {
        const params = {
            u: this.user_name,
            p: this.api_key
        }

        return axios({
            url: `${BASE_URL}/query`,
            method: 'get',
            params
        })
    }
}