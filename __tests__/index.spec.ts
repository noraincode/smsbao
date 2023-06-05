const mockAxios = jest.fn()
jest.doMock('axios', () => mockAxios)

import { Client } from '..';


describe("Test", () => {

    beforeEach(() => {
        mockAxios.mockReset()
    })

    const client = new Client({
        user_name: "test user name",
        product_id: "test product id",
        api_key: "test api key"
    })

    test("new Client()", () => {
        expect(client).not.toBeNull()
    })

    test("sendSMS is callable", async () => {
        await client.sendSMS("mock_number", "mock_content")

        expect(mockAxios.mock.calls[0][0]).toMatchInlineSnapshot(`
{
  "method": "get",
  "params": {
    "c": "mock_content",
    "g": "test product id",
    "m": "mock_number",
    "p": "test api key",
    "u": "test user name",
  },
  "url": "https://api.smsbao.com/sms",
}
`
)
    })

    test("getQuota is callable", async () => {
        await client.getQuota()

        expect(mockAxios.mock.calls[0][0]).toMatchInlineSnapshot(`
{
  "method": "get",
  "params": {
    "p": "test api key",
    "u": "test user name",
  },
  "url": "https://api.smsbao.com/query",
}
`
)
    })
})