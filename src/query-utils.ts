const SPAN_CLASS_NAME = 'uk.ac.susx.tag.method51.core.meta.span.Spans';

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
