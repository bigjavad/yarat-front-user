export const creatorLink=(links:string[]):string=>{
    let link:string="";
    links.map((item:string)=>{
        link+=item;
    })
    return link
}
