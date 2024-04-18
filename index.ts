#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.green.bold("\n \t Welcome to Word Counter Application\n"));

const answers: {
    Sentence: string
    } = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: "Enter your Sentence to count the words"
        }
]);

const words = answers.Sentence.trim().split(" ")
console.log(words)

console.log(`Your Sentence word count are ${chalk.blue.bold(words.length)}`);



