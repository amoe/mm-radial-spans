const SPAN_CLASS_NAME = 'uk.ac.susx.tag.method51.core.meta.span.Spans';

// For some reason it can only be a literal if it includes this class in the
// query.
function isSpanLiteral(literal: LiteralDefinition): boolean {
    return literal['key']['type']['class'] === SPAN_CLASS_NAME;
}

function getSpanPropertyNames(query: MicroMacroQuery): string[] {
    const literalDefinitions = Object.values(query.literals);
    return literalDefinitions.filter(isSpanLiteral).map(l => l.key.name);
}

export {
    getSpanPropertyNames
};
