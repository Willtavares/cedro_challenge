import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonPretty',
  standalone: true,
})
export class JsonPrettyPipe implements PipeTransform {
  transform(jsonObject: any): string {
    if (!jsonObject) return '';
    return JSON.stringify(jsonObject, null, 2);
  }
}
