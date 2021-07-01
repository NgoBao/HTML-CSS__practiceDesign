* {
    box-sizing: border-box;
    padding: 0;

}

body {
    display: block;
    margin: 0;
}

.grid {
    width: 100%;
}

.grid.wide {
    max-width: 1200px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -4px;
    margin-right: -4px;
}

.row.no-gutters {
    margin-left: 0;
    margin-right: 0;
}

.col {
    padding-left: 4px;
    padding-right: 4px;
}

.col .no-gutters {
    padding-left: 0;
    padding-right: 0;
}

.sm-1,
.sm-2,
.sm-3,
.sm-4,
.sm-5,
.sm-6,
.sm-7,
.sm-8,
.sm-9,
.sm-10,
.sm-11,
.sm-12 {
    display: block;
}

.sm-0 {
    display: none;
}
.sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
}
.sm-2 {
    flex: 0 0 16.66666%;
    max-width: 16.66666%;
}
.sm-3 {
    flex: 0 0 24.99999%;
    max-width: 24.99999%;
}
.sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
}
.sm-5 {
    flex: 0 0 41.66666%;
    max-width: 41.66666%;
}
.sm-6 {
    flex: 0 0 49.99999%;
    max-width: 49.99999%;
}
.sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
}
.sm-8 {
    flex: 0 0 66.66666%;
    max-width: 66.66666%;
}
.sm-9 {
    flex: 0 0 74.99999%;
    max-width: 74.99999%;
}
.sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
}
.sm-11 {
    flex: 0 0 91.66666%;
    max-width: 91.66666%;
}
.sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
}

.sm-o-1 {
    margin-left: 8.33333%;
}
.sm-o-2 {
    margin-left: 16.66666%;
}
.sm-o-3 {
    margin-left: 24.99999%;
}
.sm-o-4 {
    margin-left: 33.33333%;
}
.sm-o-5 {
    margin-left: 41.66666%;
}
.sm-o-6 {
    margin-left: 49.99999%;
}
.sm-o-7 {
    margin-left: 58.33333%;
}
.sm-o-8 {
    margin-left: 66.66666%;
}
.sm-o-9 {
    margin-left: 74.99999%;
}
.sm-o-10 {
    margin-left: 83.33333%;
}
.sm-o-11 {
    margin-left: 91.66666%;
}
.sm-o-12 {
    margin-left: 100%;
}

@media screen and (min-width: 740px) {
    .row {
        margin-left: -8px;
        margin-right: -8px;
    }

    .wide .col {
        padding-right: 8px;
        padding-left: 8px;
    }

}

@media screen and (min-width: 740px) and (max-width: 1023px) {
    .grid.wide {
        width: 644px;
    }
    
    
    .sm-1,
    .sm-2,
    .sm-3,
    .sm-4,
    .sm-5,
    .sm-6,
    .sm-7,
    .sm-8,
    .sm-9,
    .sm-10,
    .sm-11,
    .sm-12 {
        display: block;
    }

    .md-0 {
        display: none;
    }
    .md-1 {
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .md-2 {
        flex: 0 0 16.66666%;
        max-width: 16.66666%;
    }
    .md-3 {
        flex: 0 0 24.99999%;
        max-width: 24.99999%;
    }
    .md-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .md-5 {
        flex: 0 0 41.66666%;
        max-width: 41.66666%;
    }
    .md-6 {
        flex: 0 0 49.99999%;
        max-width: 49.99999%;
    }
    .md-7 {
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .md-8 {
        flex: 0 0 66.66666%;
        max-width: 66.66666%;
    }
    .md-9 {
        flex: 0 0 74.99999%;
        max-width: 74.99999%;
    }
    .md-10 {
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .md-11 {
        flex: 0 0 91.66666%;
        max-width: 91.66666%;
    }
    .md-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .md-o-1 {
        margin-left: 8.33333%;
    }
    .md-o-2 {
        margin-left: 16.66666%;
    }
    .md-o-3 {
        margin-left: 24.99999%;
    }
    .md-o-4 {
        margin-left: 33.33333%;
    }
    .md-o-5 {
        margin-left: 41.66666%;
    }
    .md-o-6 {
        margin-left: 49.99999%;
    }
    .md-o-7 {
        margin-left: 58.33333%;
    }
    .md-o-8 {
        margin-left: 66.66666%;
    }
    .md-o-9 {
        margin-left: 74.99999%;
    }
    .md-o-10 {
        margin-left: 83.33333%;
    }
    .md-o-11 {
        margin-left: 91.66666%;
    }
    .md-o-12 {
        margin-left: 100%;
    }
}   

@media screen and (min-width: 1113px) {
    .row {
        margin-left: -12px;
        margin-right: -12px;
    }

    .col {
        padding-left: 12px;
        padding-right: 12px;
    }

    .l-1,
    .l-2,
    .l-3,
    .l-4,
    .l-5,
    .l-6,
    .l-7,
    .l-8,
    .l-9,
    .l-10,
    .l-11,
    .l-12 {
        display: block;
    }

    .l-0 {
        display: none;
    }
    .l-1 {
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .l-2 {
        flex: 0 0 16.66666%;
        max-width: 16.66666%;
    }
    .l-3 {
        flex: 0 0 24.99999%;
        max-width: 24.99999%;
    }
    .l-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .l-5 {
        flex: 0 0 41.66666%;
        max-width: 41.66666%;
    }
    .l-6 {
        flex: 0 0 49.99999%;
        max-width: 49.99999%;
    }
    .l-7 {
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .l-8 {
        flex: 0 0 66.66666%;
        max-width: 66.66666%;
    }
    .l-9 {
        flex: 0 0 74.99999%;
        max-width: 74.99999%;
    }
    .l-10 {
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .l-11 {
        flex: 0 0 91.66666%;
        max-width: 91.66666%;
    }
    .l-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .l-o-1 {
        margin-left: 8.33333%;
    }
    .l-o-2 {
        margin-left: 16.66666%;
    }
    .l-o-3 {
        margin-left: 24.99999%;
    }
    .l-o-4 {
        margin-left: 33.33333%;
    }
    .l-o-5 {
        margin-left: 41.66666%;
    }
    .l-o-6 {
        margin-left: 49.99999%;
    }
    .l-o-7 {
        margin-left: 58.33333%;
    }
    .l-o-8 {
        margin-left: 66.66666%;
    }
    .l-o-9 {
        margin-left: 74.99999%;
    }
    .l-o-10 {
        margin-left: 83.33333%;
    }
    .l-o-11 {
        margin-left: 91.66666%;
    }
    .l-o-12 {
        margin-left: 100%;
    }
}

@media screen and (min-width: 1024px) and (max-width: 1239px) {
    .grid.wide {
        width: 984px;
    }
    .wide .row {
        margin-right: -12px;
        margin-left: -12px;
    }
    .wide .col {
        padding-left: 12px;
        padding-right: 12px;
    }

    .wide .l-1,
    .wide .l-2,
    .wide .l-3,
    .wide .l-4,
    .wide .l-5,
    .wide .l-6,
    .wide .l-7,
    .wide .l-8,
    .wide .l-9,
    .wide .l-10,
    .wide .l-11,
    .wide .l-12 {
        display: block;
    }

    .wide .l-0 {
        display: none;
    }
    .wide .l-1 {
        flex: 0 0 8.33333%;
        max-width: 8.33333%;
    }
    .wide .l-2 {
        flex: 0 0 16.66666%;
        max-width: 16.66666%;
    }
    .wide .l-3 {
        flex: 0 0 24.99999%;
        max-width: 24.99999%;
    }
    .wide .l-4 {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
    .wide .l-5 {
        flex: 0 0 41.66666%;
        max-width: 41.66666%;
    }
    .wide .l-6 {
        flex: 0 0 49.99999%;
        max-width: 49.99999%;
    }
    .wide .l-7 {
        flex: 0 0 58.33333%;
        max-width: 58.33333%;
    }
    .wide .l-8 {
        flex: 0 0 66.66666%;
        max-width: 66.66666%;
    }
    .wide .l-9 {
        flex: 0 0 74.99999%;
        max-width: 74.99999%;
    }
    .wide .l-10 {
        flex: 0 0 83.33333%;
        max-width: 83.33333%;
    }
    .wide .l-11 {
        flex: 0 0 91.66666%;
        max-width: 91.66666%;
    }
    .wide .l-12 {
        flex: 0 0 100%;
        max-width: 100%;
    }
}

