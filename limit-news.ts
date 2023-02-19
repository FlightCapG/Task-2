import { PipeTransform,Pipe } from "@angular/core";


@Pipe({
    name:'newsInfo'
})

export class LimitNews implements PipeTransform{

    transform(value: any) {
        let info:string = value+'';
         return info.substring(0,50)+'...';
 
     }
 
}



