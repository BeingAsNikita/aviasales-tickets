export const filtration = (filters, items) => {

    let newItems = items;
    if (filters.price === 'isCheap') {
        newItems = newItems.sort((a, b) => a.price - b.price)
        if (filters.all) {
            return newItems
        } else if (filters.no) {
            newItems = newItems.filter(item => item.segments[0].stops.length === 0)
        } else if (filters.one) {
            newItems = newItems.filter(item => item.segments[0].stops.length === 1)
        } else if (filters.two) {
            newItems = newItems.filter(item => item.segments[0].stops.length === 2)
        } else if (filters.three) {
            newItems = newItems.filter(item => item.segments[0].stops.length === 3)
        }

        return newItems
    } else if (filters.price === 'isFast') {
        newItems = newItems.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
        if (filters.all) {
            return newItems
        } else if (filters.no) {
            newItems = newItems.filter(item => item.segments[0].stops.length === 0)
        } else if (filters.one) {
            newItems = newItems.filter(item => item.segments[0].stops.length === 1)
        } else if (filters.two) {
            newItems = newItems.filter(item => item.segments[0].stops.length === 2)
        } else if (filters.three) {
            newItems = newItems = newItems.filter(item => item.segments[0].stops.length === 3)
        }
        return newItems
    }
}

export const checkboxToggle = (filter, filters) => {

    let newFilters = { ...filters, [filter]: !filters[filter] }

    if (filter === 'isFast' || filter === 'isCheap') {
        newFilters.price = filter
    }
    if (filter === 'all' && filters.all === false) {
        for (let i in newFilters) {
            if (typeof newFilters[i] === "boolean") {
                newFilters[i] = true;
            }
        }
    } else if (filter === 'all' && filters.all === true) {
        for (let i in newFilters) {
            if (typeof newFilters[i] === "boolean") {
                newFilters[i] = false;
            }
        }
    }
    return newFilters
}