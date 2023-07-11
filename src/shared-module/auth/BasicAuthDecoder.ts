
export interface BasicAuthPayload {
    username: string
    password: string
}

export class BasicAuthDecoder{
    static decode(authHeader){
        let res = atob(authHeader.split(' ')[1]);
        let sp = res.split(":")
        return {
            username: sp[0],
            password: sp[1]
        } as BasicAuthPayload 
    }
}