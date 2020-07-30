export const filtration = (filters, items) => {
    let newItems = items;
    if (filters.price === 'isCheap') {
        newItems.sort((a, b) => a.price - b.price)
        if (filters.all) {
            return newItems
        } else if (filters.no) {
            newItems.filter(item => item.segments[0].stops.length === 0)
        } else if (filters.one) {
            newItems.filter(item => item.segments[0].stops.length === 1)
        } else if (filters.two) {
            newItems.filter(item => item.segments[0].stops.length === 2)
        } else if (filters.three) {
            newItems.filter(item => item.segments[0].stops.length === 3)
        }

        return newItems
    } else if (filters.price === 'isFast') {
        newItems.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
        if (filters.all) {
            return newItems
        } else if (filters.no) {
            newItems.filter(item => item.segments[0].stops.length === 0)
        } else if (filters.one) {
            newItems.filter(item => item.segments[0].stops.length === 1)
        } else if (filters.two) {
            newItems.filter(item => item.segments[0].stops.length === 2)
        } else if (filters.three) {
            newItems.filter(item => {
                console.log(item.segments[0].stops.length)
                return item.segments[0].stops.length === 3})
        }

        return newItems
    }
}