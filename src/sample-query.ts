const SAMPLE_QUERY: any = {
    "table": "ob-all5",
    "filter": "aa & ab",
    "limit": 2,
    "orderBy": {
        "context": "",
        "clauses": []
    },
    "literals": {
        "aa": {
            "type": "present",
            "args": "true",
            "key": {
                "name": "persName",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [
                        {
                            "nullable": false,
                            "type": "class",
                            "typeParameters": [],
                            "class": "java.lang.String"
                        },
                        {
                            "nullable": false,
                            "type": "class",
                            "typeParameters": [],
                            "class": "java.lang.String"
                        }
                    ],
                    "class": "uk.ac.susx.tag.method51.core.meta.span.Spans"
                }
            }
        },
        "ab": {
            "type": "regex",
            "args": "death",
            "key": {
                "name": "text",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "java.lang.String"
                }
            }
        }
    },
    "_TYPE": "select",
    "isCached": false
};

export { SAMPLE_QUERY };
