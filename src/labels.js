export default {
    bike: count => {
        switch (count) {
            case 0:
                return 'No bikes';
            case 1:
                return '1 bike';
            default:
                return `${count} bikes`;
        }
    },
    space: count => {
        switch (count) {
            case 0:
                return 'No spaces';
            case 1:
                return '1 space';
            default:
                return `${count} spaces`;
        }
    },
};
