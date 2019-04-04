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


// key is actually the name of a span-property
// value is an array of UNDIFFERENTIATED span contents
// that is we can't tell which document any given span originated from, only
// that it applied to a literal represented by string 'foo'
interface SpanSearchResults {
    [key: string]: string[]
}
