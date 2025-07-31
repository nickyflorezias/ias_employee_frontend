import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profileImageList'
})
export class ProfileImageListPipe implements PipeTransform {

    transform(value: string): string {
    
        if(!value) return './img/no-image.jpg'
        if(value.includes('blob')) return './img/no-image.jpg'
        if(value === 'img') return './img/no-image.jpg'
        if(value.includes('example')) return './img/no-image.jpg'

        return value;
    }
}
