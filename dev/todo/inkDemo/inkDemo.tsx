import { Compiler } from 'inkjs/compiler/Compiler';
import { useState } from "react";
import storyInk from './InkDemoData.ink?raw';
import "./styles.css";


interface IProps {
    jsx: JSX.Element;
}




export const InkDemo = ({ jsx }: IProps): JSX.Element => {
    const [choicesMade, setChoicesMade] = useState<number[]>([])


    const removePrefix = (text: string | null, prefix: string): string => {
        if (text) {
            return text.startsWith(prefix) ? text.slice(prefix.length) : text;
        } else {
            return ''
        }
    }


    const parseTags = (tags: string[] | null): JSX.Element => {
        if (tags) {
            const firstTag = tags[0];
            if (firstTag === 'collect_badge') {
                return jsx;
            } else {
                return <></>
            }
        } else {
            return <></>
        }
    }


    const ink = new Compiler(storyInk).Compile();
    ink.Continue()
    choicesMade.forEach((choice) => {
        ink.ChooseChoiceIndex(choice)
        ink.Continue()
    })


    const currentText = ink.currentText
    const choices = ink.currentChoices
    const tags = ink.currentTags


    const makeChoice = (newChoice: number) => {
        setChoicesMade([...choicesMade, newChoice])
    }


    return <section className='componentInkDemo'>
        <p style={{ fontWeight: 'bold' }}>{removePrefix(currentText, '-')}</p>
        <p style={{ color: 'red' }}>{parseTags(tags)}</p>
        <ul style={{ fontSize: '1.3rem' }}>
            {choices.map((choice, index) => {
                return <li className="urlLink" style={{ fontStyle: 'italic' }} onClick={() => makeChoice(index)}>{choice.text}</li>
            })}
        </ul>
    </section>
};
