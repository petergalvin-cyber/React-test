import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;

    //return _.slice(items, startIndex).take(pageSize).value()
     return _.chain(items).slice(startIndex).take(pageSize).value()
    
}