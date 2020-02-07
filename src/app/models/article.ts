import { JournalistSignup } from "./journalist-signup";
import { contentDetails } from "./contentDetails";

export class article{
    id:any;
    date:Date;
    content:contentDetails;
    journalist:JournalistSignup;
    link:any;
}