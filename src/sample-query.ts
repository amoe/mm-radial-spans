export const SAMPLE_QUERY: any = {
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

export const LIMITED_SAMPLE_PROXIMITY_QUERY: any = {
    "table": "sampled",
    "proximity": "c",
    "target": "d",
    "distance": 3,
    "innerLimit": 600,
    "outerLimit": 0,
    "partition": {
        "key": {
            "namespace": "ob",
            "name": "date",
            "type": {
                "nullable": false,
                "type": "class",
                "typeParameters": [],
                "class": "java.time.LocalDate"
            }
        },
        "function": "ROW_NUMBER",
        "orderBy": {
            "context": "",
            "clauses": [
                {
                    "numeric": false,
                    "desc": false,
                    "key": {
                        "namespace": "ob",
                        "name": "date",
                        "type": {
                            "nullable": false,
                            "type": "class",
                            "typeParameters": [],
                            "class": "java.time.LocalDate"
                        }
                    }
                }
            ]
        }
    },
    "scope": {
        "key": {
            "namespace": "ob",
            "name": "trialAccount-id",
            "type": {
                "nullable": false,
                "type": "class",
                "typeParameters": [],
                "class": "java.lang.String"
            }
        },
        "function": "ROW_NUMBER",
        "orderBy": {
            "context": "",
            "clauses": [
                {
                    "numeric": false,
                    "desc": false,
                    "key": {
                        "namespace": "ob",
                        "name": "sentence-id",
                        "type": {
                            "nullable": false,
                            "type": "class",
                            "typeParameters": [],
                            "class": "java.lang.String"
                        }
                    }
                }
            ]
        }
    },
    "literals": {
        "a": {
            "presenceIfTrueElseAbsence": true,
            "key": {
                "namespace": "ob.date.time",
                "name": "classifier-am",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                }
            },
            "type": "present",
            "args": "true"
        },
        "b": {
            "presenceIfTrueElseAbsence": true,
            "key": {
                "namespace": "ob.date.time",
                "name": "classifier-pm",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                }
            },
            "type": "present",
            "args": "true"
        },
        "c": {
            "presenceIfTrueElseAbsence": true,
            "key": {
                "namespace": "ob.activity",
                "name": "apprehend-c",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "java.lang.Boolean"
                }
            },
            "type": "present",
            "args": "true"
        },
        "d": {
            "value": "nightdefinitive",
            "key": {
                "namespace": "classify",
                "name": "classified-nightmention1-sentences-nightdefinitive",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                }
            },
            "type": "equals",
            "args": "nightdefinitive"
        },
        "e": {
            "presenceIfTrueElseAbsence": true,
            "key": {
                "namespace": "obsphere",
                "name": "riverB-kw",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "java.lang.Boolean"
                }
            },
            "type": "present",
            "args": "true"
        },
        "f": {
            "presenceIfTrueElseAbsence": true,
            "key": {
                "namespace": "ob.sphere",
                "name": "maritime",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "java.lang.Boolean"
                }
            },
            "type": "present",
            "args": "true"
        },
        "g": {
            "value": "definitelyam",
            "key": {
                "namespace": "ob.date.time",
                "name": "classifier-am",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                }
            },
            "type": "equals",
            "args": "definitelyam"
        },
        "h": {
            "value": "definitelypm",
            "key": {
                "namespace": "ob.date.time",
                "name": "classifier-pm",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                }
            },
            "type": "equals",
            "args": "definitelypm"
        }
    },
    "_TYPE": "proximity"
};

export function getUnlimitedProximityQuery(table: string): object {
    return {
        "table": table,
        "proximity": "c",
        "target": "d",
        "distance": 3,
        "innerLimit": 0,
        "innerOffset": 0,
        "outerLimit": 0,
        "partition": {
            "key": {
                "namespace": "ob",
                "name": "date",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "java.time.LocalDate"
                }
            },
            "function": "ROW_NUMBER",
            "orderBy": {
                "context": "",
                "clauses": [
                    {
                        "numeric": false,
                        "desc": false,
                        "key": {
                            "namespace": "ob",
                            "name": "date",
                            "type": {
                                "nullable": false,
                                "type": "class",
                                "typeParameters": [],
                                "class": "java.time.LocalDate"
                            }
                        }
                    }
                ]
            }
        },
        "scope": {
            "key": {
                "namespace": "ob",
                "name": "trialAccount-id",
                "type": {
                    "nullable": false,
                    "type": "class",
                    "typeParameters": [],
                    "class": "java.lang.String"
                }
            },
            "function": "ROW_NUMBER",
            "orderBy": {
                "context": "",
                "clauses": [
                    {
                        "numeric": false,
                        "desc": false,
                        "key": {
                            "namespace": "ob",
                            "name": "sentence-id",
                            "type": {
                                "nullable": false,
                                "type": "class",
                                "typeParameters": [],
                                "class": "java.lang.String"
                            }
                        }
                    }
                ]
            }
        },
        "literals": {
            "a": {
                "presenceIfTrueElseAbsence": true,
                "key": {
                    "namespace": "ob.date.time",
                    "name": "classifier-am",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                    }
                },
                "type": "present",
                "args": "true"
            },
            "b": {
                "presenceIfTrueElseAbsence": true,
                "key": {
                    "namespace": "ob.date.time",
                    "name": "classifier-pm",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                    }
                },
                "type": "present",
                "args": "true"
            },
            "c": {
                "presenceIfTrueElseAbsence": true,
                "key": {
                    "namespace": "ob.activity",
                    "name": "apprehend-c",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "java.lang.Boolean"
                    }
                },
                "type": "present",
                "args": "true"
            },
            "d": {
                "value": "nightdefinitive",
                "key": {
                    "namespace": "classify",
                    "name": "classified-nightmention1-sentences-nightdefinitive",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                    }
                },
                "type": "equals",
                "args": "nightdefinitive"
            },
            "e": {
                "presenceIfTrueElseAbsence": true,
                "key": {
                    "namespace": "obsphere",
                    "name": "riverB-kw",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "java.lang.Boolean"
                    }
                },
                "type": "present",
                "args": "true"
            },
            "f": {
                "presenceIfTrueElseAbsence": true,
                "key": {
                    "namespace": "ob.sphere",
                    "name": "maritime",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "java.lang.Boolean"
                    }
                },
                "type": "present",
                "args": "true"
            },
            "g": {
                "value": "definitelyam",
                "key": {
                    "namespace": "ob.date.time",
                    "name": "classifier-am",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                    }
                },
                "type": "equals",
                "args": "definitelyam"
            },
            "h": {
                "value": "definitelypm",
                "key": {
                    "namespace": "ob.date.time",
                    "name": "classifier-pm",
                    "type": {
                        "nullable": false,
                        "type": "class",
                        "typeParameters": [],
                        "class": "uk.ac.susx.tag.method51.twitter.LabelDecision"
                    }
                },
                "type": "equals",
                "args": "definitelypm"
            }
        },
        "_TYPE": "proximity",
        "orderBy": {
        },
        "limit": 0
    };
}
