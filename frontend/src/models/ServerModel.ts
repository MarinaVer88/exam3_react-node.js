export class ServerModel{
    public constructor(
        public id: number,
        public name: string,
        public ip: string,
        public status: number,
        public datetime: string,
        public company_name: string,
        public hosting_company_id?: number,
    ){}   
}