interface MicroMacroQuery {
    literals: LiteralRegistry;
}

interface LiteralRegistry {
    [key: string]: LiteralDefinition;
}

interface LiteralDefinition {
    key: KeyDefinition;
}

interface KeyDefinition {
    name: string;    // this is the annotation name
    type: KeyTypeDefinition;
    // There's more, but we don't need it yet
}

interface KeyTypeDefinition {
    class: string;
}

