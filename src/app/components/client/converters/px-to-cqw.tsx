'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import styles from './style.module.scss';

type UnitType = 'cqw' | 'cqh';

export default function PxToCqwConverter() {
    const { theme, getThemeIcon, getThemeText } = useTheme();
    const [pxValue, setPxValue] = useState<number>(171);
    const [parentWidth, setParentWidth] = useState<number>(375);
    const [parentHeight, setParentHeight] = useState<number>(812);
    const [unitType, setUnitType] = useState<UnitType>('cqw');
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>('');

    // Мемоизированный результат конвертации
    const result = useMemo(() => {
        const px = pxValue || 0;

        if (unitType === 'cqw') {
            const parent = parentWidth || 1;
            return ((px / parent) * 100).toFixed(1);
        } else {
            const parent = parentHeight || 1;
            return ((px / parent) * 100).toFixed(1);
        }
    }, [pxValue, parentWidth, parentHeight, unitType]);

    const resultValue = useMemo(() => `${result}${unitType}`, [result, unitType]);

    // Формула для отображения
    const formula = useMemo(() => {
        if (unitType === 'cqw') {
            return `(${pxValue}px / ${parentWidth}px) × 100 = ${result}cqw`;
        } else {
            return `(${pxValue}px / ${parentHeight}px) × 100 = ${result}cqh`;
        }
    }, [pxValue, parentWidth, parentHeight, result, unitType]);

    const copyToClipboard = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(resultValue);
            setIsCopied(true);
            setToastMessage(`✨ Скопировано: ${resultValue}`);

            setTimeout(() => {
                setIsCopied(false);
                setToastMessage('');
            }, 1000);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = resultValue;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            setIsCopied(true);
            setToastMessage(`✨ Скопировано: ${resultValue}`);

            setTimeout(() => {
                setIsCopied(false);
                setToastMessage('');
            }, 1000);
        }
    }, [resultValue]);

    return (
        <div className={styles['converter-container']}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h3 className={styles.title}>
                        📐 px → cqw/cqh конвертер
                    </h3>
                </div>

                {/* Переключатель единиц */}
                <div className={styles['unit-toggle']}>
                    <button
                        className={`${styles['unit-btn']} ${unitType === 'cqw' ? styles.active : ''}`}
                        onClick={() => setUnitType('cqw')}
                    >
                        cqw (ширина)
                    </button>
                    <button
                        className={`${styles['unit-btn']} ${unitType === 'cqh' ? styles.active : ''}`}
                        onClick={() => setUnitType('cqh')}
                    >
                        cqh (высота)
                    </button>
                </div>

                <div className={styles['parent-box']}>
                    <div className={styles['box-header']}>
                        <span className={styles['box-title']}>
                            📦 Родитель (контейнер)
                        </span>
                        <span className={styles.badge}>
                            {unitType === 'cqw'
                                ? 'container-type: inline-size'
                                : 'container-type: size (block-size)'}
                        </span>
                    </div>

                    {/* Условный рендеринг: показываем только нужное поле */}
                    {unitType === 'cqw' ? (
                        <div className={styles['input-group']}>
                            <span className={styles.label}>Ширина:</span>
                            <input
                                type="number"
                                value={parentWidth}
                                onChange={(e) => setParentWidth(parseFloat(e.target.value) || 0)}
                                step="1"
                                min="1"
                                className={styles.input}
                                aria-label="Ширина родительского контейнера в пикселях"
                            />
                            <span className={styles.unit}>px</span>
                        </div>
                    ) : (
                        <div className={styles['input-group']}>
                            <span className={styles.label}>Высота:</span>
                            <input
                                type="number"
                                value={parentHeight}
                                onChange={(e) => setParentHeight(parseFloat(e.target.value) || 0)}
                                step="1"
                                min="1"
                                className={styles.input}
                                aria-label="Высота родительского контейнера в пикселях"
                            />
                            <span className={styles.unit}>px</span>
                        </div>
                    )}
                </div>

                <div className={styles['child-box']}>
                    <div className={styles['box-header']}>
                        <span className={styles['box-title']}>🧩 Потомок (элемент)</span>
                        <span className={styles.badge}>
                            {unitType === 'cqw' ? 'width: Ncqw' : 'height: Ncqh'}
                        </span>
                    </div>
                    <div className={styles['input-group']}>
                        <span className={styles.label}>
                            {unitType === 'cqw' ? 'Ширина:' : 'Высота:'}
                        </span>
                        <input
                            type="number"
                            value={pxValue}
                            onChange={(e) => setPxValue(parseFloat(e.target.value) || 0)}
                            step="1"
                            min="0"
                            className={styles.input}
                            aria-label={`Размер элемента в пикселях (${unitType === 'cqw' ? 'ширина' : 'высота'})`}
                        />
                        <span className={styles.unit}>px</span>
                    </div>
                </div>

                <button
                    className={styles['convert-btn']}
                    onClick={copyToClipboard}
                    aria-label="Скопировать результат в буфер обмена"
                >
                    📋 Скопировать результат
                </button>

                <div
                    className={`${styles.result} ${isCopied ? styles.copied : ''}`}
                    onClick={copyToClipboard}
                    role="button"
                    tabIndex={0}
                    aria-label={`Результат: ${resultValue}. Нажмите для копирования`}
                    onKeyDown={(e) => e.key === 'Enter' && copyToClipboard()}
                >
                    <span aria-hidden="true">{resultValue}</span>
                    <span className={styles['copy-hint']}>📋 нажмите чтобы скопировать</span>
                </div>

                <div className={styles.formula} aria-label="Формула расчета">
                    {formula}
                </div>

                <div className={styles.note}>
                    <span>1{unitType} = 1% от {unitType === 'cqw' ? 'ширины' : 'высоты'} родителя</span>
                </div>
            </div>

            {toastMessage && (
                <div
                    className={styles.toast}
                    role="alert"
                    aria-live="polite"
                >
                    {toastMessage}
                </div>
            )}
        </div>
    );
}
