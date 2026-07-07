'use client';

import React, { useState } from 'react';
import { Flex, IconButton, Text } from '@/once-ui/components';
import styles from './about.module.scss';

interface TableOfContentsProps {
    structure: {
        title: string;
        display: boolean;
        items: string[];
    }[];
    about: {
        tableOfContent: {
            display: boolean;
            subItems: boolean;
        };
    };
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about }) => {
    const [collapsed, setCollapsed] = useState(false);

    const scrollTo = (id: string, offset: number) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    if (!about.tableOfContent.display) return null;

    return (
        <Flex
            className={styles.toc}
            style={{
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                whiteSpace: 'nowrap'
            }}
            position="fixed"
            paddingLeft="24" gap="16"
            direction="column" hide="s">
            <IconButton
                icon={collapsed ? 'chevronRight' : 'chevronLeft'}
                variant="secondary"
                size="s"
                tooltip={collapsed ? 'Show navigation' : 'Hide navigation'}
                tooltipPosition="right"
                onClick={() => setCollapsed((value) => !value)}
            />
            {!collapsed && <Flex gap="32" direction="column">
            {structure
                .filter(section => section.display)
                .map((section, sectionIndex) => (
                <Flex key={sectionIndex} gap="12" direction="column">
                    <Flex
                        style={{ cursor: 'pointer' }}
                        className={styles.hover}
                        gap="8"
                        alignItems="center"
                        onClick={() => scrollTo(section.title, 80)}>
                        <Flex
                            height="1" width="16"
                            background="neutral-strong">
                        </Flex>
                        <Text className={styles.tocLabel}>
                            {section.title}
                        </Text>
                    </Flex>
                    {about.tableOfContent.subItems && (
                        <>
                            {section.items.map((item, itemIndex) => (
                                <Flex
                                    key={itemIndex}
                                    style={{ cursor: 'pointer' }}
                                    className={styles.hover}
                                    gap="12" paddingLeft="24"
                                    alignItems="center"
                                    onClick={() => scrollTo(item, 80)}>
                                    <Flex
                                        height="1" width="8"
                                        background="neutral-strong">
                                    </Flex>
                                    <Text className={styles.tocLabel}>
                                        {item}
                                    </Text>
                                </Flex>
                            ))}
                        </>
                    )}
                </Flex>
            ))}
            </Flex>}
        </Flex>
    );
};

export default TableOfContents;