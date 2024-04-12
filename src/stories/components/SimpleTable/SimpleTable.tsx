import React from 'react';
import {
    SimpleTableParams,
    SimpleTableField,
    DynamicObject as SampleObject,
} from './SimpleTable.types';

function generateColumnTemplate<T>(fields: SimpleTableField<T>[]): string {
    let resultTemplate = '';

    fields.forEach(field => {
        resultTemplate = `${resultTemplate} minmax(${field.width ?? field.minWidth ?? '0'}, ${field.width ?? field.maxWidth ?? '1fr'})`;
    });

    return resultTemplate;
}

export default function SimpleTable<T extends SampleObject>({
    datasource,
    fields,
}: SimpleTableParams<T>) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: generateColumnTemplate(fields),
                gap: '0px',
                width: '100%',
            }}>
            {fields.map(field => (
                <div
                    style={{
                        color: 'white',
                        background: 'red',
                        padding: '5px',
                        textAlign: 'center',
                    }}>
                    {field.key}
                </div>
            ))}
            {datasource.map(row =>
                fields.map(field => {
                    const callback = (
                        event:
                            | React.MouseEvent<HTMLDivElement, MouseEvent>
                            | React.KeyboardEvent<HTMLDivElement>
                    ) => {
                        if (item.onClick) {
                            if (item.stopOnClickPropagation)
                                event.stopPropagation();
                            item.onClick(row);
                        }
                    };
                    const item: SimpleTableField<T> = field;
                    const dynamicProps: { [key: string]: unknown } = {
                        role: item.onClick ? 'button' : 'cell',
                    };

                    if (item.onClick) {
                        dynamicProps.onKeyDown = { callback };
                        dynamicProps.onClick = { callback };
                        dynamicProps.tabIndex = 0;
                    }
                    return (
                        <div
                            style={{
                                cursor: item.onClick ? 'pointer' : 'default',
                                textAlign: 'center',
                                padding: '5px',
                                borderBottom: '1px solid lightgrey',
                            }}
                            {...dynamicProps}>
                            {item?.customGetter
                                ? item.customGetter(row)
                                : row[item.value_field]}
                        </div>
                    );
                })
            )}
        </div>
    );
}
