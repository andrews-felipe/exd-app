import { Message } from "./message";

export class Proposal {
    key : string;
    uid : string;
    type : string;
    imageUrl : any
    imgId : string;
    title: string;
    description: string;
    date: Date = new Date();

    messages : Array<Message> = new Array<Message>();

}