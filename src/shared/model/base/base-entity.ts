export class BaseEntity{
    id:number;
    createdDate: Date;
    lastUpdate: Date;
    version: number;
    creatorId: number;
    createdBy: string;
    updaterId: number;
    updatedBy: string;
    clientIp: string;
    userAgent: string;
}
