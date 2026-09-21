import fs from "fs";
import path from "path";

const base="src/app/calculators";

function scan(dir,files=[]){
  for(const item of fs.readdirSync(dir)){
    const full=path.join(dir,item);

    if(fs.statSync(full).isDirectory()){
      scan(full,files);
    }

    if(item==="page.tsx"){
      files.push(full);
    }
  }

  return files;
}


for(const file of scan(base)){

 let text=fs.readFileSync(file,"utf8");

 if(!text.includes("faqItems.map")){
   continue;
 }

 const slug=path.basename(path.dirname(file));


 const block=/<section aria-labelledby="faq-heading">[\s\S]*?<\/section>/;

 text=text.replace(
   block,
   `<CalculatorFAQ slug="${slug}" />`
 );

 fs.writeFileSync(file,text);

 console.log("fixed",file);
}

console.log("done");
