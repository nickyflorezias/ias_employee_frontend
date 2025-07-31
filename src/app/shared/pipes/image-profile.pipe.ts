import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageprofile'
})

export class ImageProfilePipe implements PipeTransform {
    transform(value: string): string {
    
        if(value.includes('blob')) return './img/no-image.jpg'
        if(!value) return './img/no-image.jpg'
        if(value.includes('example')) return './img/no-image.jpg'

        return value;
    }
}