const crosswords = [
    {
        "cat": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
        "map": "https://upload.wikimedia.org/wikipedia/commons/3/3b/World_Map_1689.JPG"
    },
    {
        "home": "https://upload.wikimedia.org/wikipedia/commons/e/e8/German_House.jpg",
        "boat": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Gondoliere.jpg"
    },
    {
        "money": "https://upload.wikimedia.org/wikipedia/commons/3/30/Pengar_-_2019.jpg",
        "lunch": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Lunch_boxes.jpg",
    },
    {
        "motion": "https://upload.wikimedia.org/wikipedia/commons/3/30/Pengar_-_2019.jpg",
        "priest": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Lunch_boxes.jpg",
    }
];

/*

        a b c d -- index of b is 1
        e f b g -- index of b is 2

        0  1  2  3
0          e
1          f  
2       a  b  c  d
3          g

 [b, c][0] = b
*/
