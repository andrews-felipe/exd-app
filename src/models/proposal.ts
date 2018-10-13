import { Message } from "./message";

export class Proposal {
    uid : string;
    type : string;
    imageUrl : any
    title: string;
    description: string;
    date: Date = new Date();

    messages : Array<Message> = new Array<Message>();

}