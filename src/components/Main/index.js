import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDarkMode } from '../DarkModeContext/DarkModeProvider';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Message,
} from 'semantic-ui-react';

import mindImg from '../../images/mind.svg';

import {
  CATEGORIES,
  NUM_OF_QUESTIONS,
  DIFFICULTY,
  QUESTIONS_TYPE,
  COUNTDOWN_TIME,
} from '../../constants';
import { shuffle } from '../../utils';

import Offline from '../Offline';

const Main = ({ startQuiz }) => {
  const { darkMode } = useDarkMode();
  const [category, setCategory] = useState('0');
  const [numOfQuestions, setNumOfQuestions] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const [questionsType, setQuestionsType] = useState('0');
  const [countdownTime, setCountdownTime] = useState({
    hours: 0,
    minutes: 120,
    seconds: 0,
  });
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [offline, setOffline] = useState(false);

  const style = {
    backgroundColor: darkMode ? '#1e1e1e' : 'white',
    color: darkMode ? '#f5f5f5' : 'black',
    padding: '8px',
    transition: 'all 0.3s ease-in-out',
  };
  const handleTimeChange = (e, { name, value }) => {
    setCountdownTime({ ...countdownTime, [name]: value });
  };

  let allFieldsSelected = false;
  if (
    category &&
    numOfQuestions &&
    difficulty &&
    questionsType &&
    (countdownTime.hours || countdownTime.minutes || countdownTime.seconds)
  ) {
    allFieldsSelected = true;
  }

  const fetchData = () => {
    setProcessing(true);

    if (error) setError(null);

    const API = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${difficulty}&type=${questionsType}`;
    // https://opentdb.com/api.php?amount=5&category=0&difficulty=easy&type=0
    // alert(API);
    console.log(API);

    fetch(API)
      .then(respone => respone.json())
      .then(data =>
        setTimeout(() => {
          data = {
            "response_code": 0,
            "results": [
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which command displays the current working directory?",
                "correct_answer": "pwd",
                "incorrect_answers": ["cd", "ls", "cp"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What does the `ls` command do?",
                "correct_answer": "Lists directory contents.",
                "incorrect_answers": ["Changes directories.", "Copies files.", "Deletes files."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What is the default shell in most Linux distributions?",
                "correct_answer": "Bash",
                "incorrect_answers": ["Zsh", "Fish", "Ksh"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which symbol represents the home directory in Linux?",
                "correct_answer": "~",
                "incorrect_answers": ["/", ".", ".."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which command clears the terminal screen?",
                "correct_answer": "clear",
                "incorrect_answers": ["reset", "ctrl+L", "exit"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which command shows manual pages?",
                "correct_answer": "man",
                "incorrect_answers": ["apropos", "help", "info"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which command is used to display text on the terminal?",
                "correct_answer": "echo",
                "incorrect_answers": ["cat", "less", "more"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What is the command to create a new directory?",
                "correct_answer": "mkdir",
                "incorrect_answers": ["touch", "cp", "rm"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What does `ls -a` show?",
                "correct_answer": "All files, including hidden ones.",
                "incorrect_answers": ["Only files.", "Directories only.", "Files with details."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What does `Ctrl+C` do in Linux?",
                "correct_answer": "Interrupts a running process.",
                "incorrect_answers": ["Clears the screen.", "Closes the terminal.", "Shows command history."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which command shows the current date and time?",
                "correct_answer": "date",
                "incorrect_answers": ["time", "clock", "datetime"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which command shows a file's contents page by page?",
                "correct_answer": "more",
                "incorrect_answers": ["cat", "tac", "tail"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What does the `id` command display?",
                "correct_answer": "User and group IDs.",
                "incorrect_answers": ["User permissions.", "Home directory.", "Last login."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What is stored in `/etc/passwd`?",
                "correct_answer": "User account details.",
                "incorrect_answers": ["Passwords.", "Commands history.", "Kernel modules."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What does `>` do in Linux?",
                "correct_answer": "Redirects output to a file.",
                "incorrect_answers": ["Appends output to a file.", "Clears the terminal.", "Reads from a file."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which command shows who is logged in?",
                "correct_answer": "who",
                "incorrect_answers": ["id", "login", "pwd"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "Which key is used for auto-completion in Linux terminals?",
                "correct_answer": "Tab",
                "incorrect_answers": ["Enter", "Ctrl+C", "Ctrl+L"]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What does `chmod` do?",
                "correct_answer": "Changes file permissions.",
                "incorrect_answers": ["Moves files.", "Lists files.", "Creates directories."]
              },
              {
                "type": "multiple",
                "difficulty": "easy",
                "category": "Linux",
                "question": "What command moves to the parent directory?",
                "correct_answer": "cd ..",
                "incorrect_answers": ["cd /", "cd ~", "cd ../.."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What option with `ls` shows the file size in a human-readable format?",
                  "correct_answer": "-h",
                  "incorrect_answers": ["-a", "-l", "-s"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What command allows searching for manual pages using keywords?",
                  "correct_answer": "apropos",
                  "incorrect_answers": ["whatis", "grep", "find"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "Which command recursively deletes directories and files?",
                  "correct_answer": "rm -r",
                  "incorrect_answers": ["rm", "rmdir", "cp -r"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does the `find` command do?",
                  "correct_answer": "Searches for files and directories.",
                  "incorrect_answers": ["Displays file contents.", "Finds text in files.", "Deletes files."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "Which command appends output to an existing file?",
                  "correct_answer": ">>",
                  "incorrect_answers": [">", "<", "<<"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does `history` show?",
                  "correct_answer": "List of previously executed commands.",
                  "incorrect_answers": ["Login history.", "Command permissions.", "File history."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "Which command is used to change the owner of a file?",
                  "correct_answer": "chown",
                  "incorrect_answers": ["chmod", "chgrp", "mv"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does `tail -f` do?",
                  "correct_answer": "Displays real-time updates to a file.",
                  "incorrect_answers": ["Displays the last 10 lines of a file.", "Displays file size.", "Creates a backup of the file."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "Which command identifies the type of a file?",
                  "correct_answer": "file",
                  "incorrect_answers": ["ls", "cat", "touch"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What option with `grep` makes the search case insensitive?",
                  "correct_answer": "-i",
                  "incorrect_answers": ["-v", "-w", "-l"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does `mv` do?",
                  "correct_answer": "Moves or renames files.",
                  "incorrect_answers": ["Copies files.", "Deletes files.", "Lists files."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "Which command displays the last 20 commands from history?",
                  "correct_answer": "history 20",
                  "incorrect_answers": ["history -20", "history --tail 20", "show history 20"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "Which option with `find` specifies file size?",
                  "correct_answer": "-size",
                  "incorrect_answers": ["-name", "-type", "-perm"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does `chmod 755 file` do?",
                  "correct_answer": "Grants full access to the owner and read/execute to others.",
                  "incorrect_answers": ["Grants write access to all.", "Revokes all permissions.", "Deletes the file."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does `whoami` display?",
                  "correct_answer": "The username of the current user.",
                  "incorrect_answers": ["Current directory.", "Group memberships.", "Shell type."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "Which command deletes empty directories?",
                  "correct_answer": "rmdir",
                  "incorrect_answers": ["rm", "rm -r", "touch"]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does `ls -l` display?",
                  "correct_answer": "A detailed list of files and directories.",
                  "incorrect_answers": ["All hidden files.", "File permissions only.", "The file type."]
              },
            {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does the `>` operator do?",
                  "correct_answer": "Overwrites a file with output.",
                  "incorrect_answers": ["Appends to a file.", "Reads from a file.", "Redirects input."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What is the purpose of `/dev/null`?",
                  "correct_answer": "Discards unwanted output.",
                  "incorrect_answers": ["Redirects to a file.", "Displays logs.", "Clears terminal output."]
              },
              {
                  "type": "multiple",
                  "difficulty": "medium",
                  "category": "Linux",
                  "question": "What does the `alias` command do?",
                  "correct_answer": "Creates a shortcut for commands.",
                  "incorrect_answers": ["Lists files.", "Changes directories.", "Renames a file."]
              },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "Which `find` option allows execution of a command on search results?",
                "correct_answer": "-exec",
                "incorrect_answers": ["-run", "-cmd", "-do"]
            },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "What does `chmod 644 file` do?",
                "correct_answer": "Grants read/write to owner and read-only to others.",
                "incorrect_answers": ["Grants full access to everyone.", "Deletes the file.", "Sets no permissions."]
            },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "What does `ls -lia` display?",
                "correct_answer": "Detailed list with inode numbers.",
                "incorrect_answers": ["Hidden files only.", "Sorted files.", "Permissions only."]
            },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "What does `rm -rf /tmp/*` do?",
                "correct_answer": "Deletes all files and directories in `/tmp` recursively.",
                "incorrect_answers": ["Deletes only empty directories.", "Clears `/tmp` logs.", "Displays contents of `/tmp`."]
            },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "Which command searches for a string in multiple files recursively?",
                "correct_answer": "grep -R",
                "incorrect_answers": ["find -s", "search", "ls -r"]
            },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "What does `head -n 20 file` do?",
                "correct_answer": "Displays the first 20 lines of the file.",
                "incorrect_answers": ["Shows the last 20 lines.", "Deletes 20 lines.", "Copies 20 lines."]
            },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "Which option with `ls` sorts files by extension?",
                "correct_answer": "-X",
                "incorrect_answers": ["-S", "-A", "-t"]
            },
            {
                "type": "multiple",
                "difficulty": "hard",
                "category": "Linux",
                "question": "What does `cat file1 file2 > merged.txt` do?",
                "correct_answer": "Merges contents of two files into `merged.txt`.",
                "incorrect_answers": ["Appends file1 to file2.", "Deletes file1 and file2.", "Displays the files."]
            },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `pwd` command displays the current working directory.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `ls` command changes directories.",
                  "correct_answer": "False",
                  "incorrect_answers": ["True"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "Bash is the default shell in most Linux distributions.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `~` symbol represents the home directory in Linux.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `clear` command clears the terminal screen.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `man` command shows manual pages.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `echo` command is used to display text on the terminal.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `mkdir` command is used to create a new directory.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `ls -a` command shows all files, including hidden ones.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `Ctrl+C` command interrupts a running process.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `date` command shows the current date and time.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `cat` command is used to display file contents.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `cd` command changes the current directory.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `ls -l` command displays detailed file information.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `rm` command is used to remove files.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `history` command shows the previously executed commands.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `nano` command opens a text editor.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `touch` command is used to create new files.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
              {
                  "type": "boolean",
                  "difficulty": "easy",
                  "category": "Linux",
                  "question": "The `which` command shows the path of an executable.",
                  "correct_answer": "True",
                  "incorrect_answers": ["False"]
              },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `ls -h` command shows the file size in a human-readable format.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `apropos` command is used for searching for manual pages using keywords.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `rm -r` command recursively deletes directories and files.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `find` command is used to search for files and directories.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `>>` command appends output to an existing file.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `history` command shows a list of previously executed commands.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `chown` command is used to change the owner of a file.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `tail -f` command displays real-time updates to a file.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `file` command identifies the type of a file.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
            {
                "type": "boolean",
                "difficulty": "medium",
                "category": "Linux",
                "question": "The `grep -i` command makes the search case insensitive.",
                "correct_answer": "True",
                "incorrect_answers": ["False"]
            },
          {
              "type": "boolean",
              "difficulty": "hard",
              "category": "Linux",
              "question": "The `-exec` option with `find` allows execution of a command on search results.",
              "correct_answer": "True",
              "incorrect_answers": ["False"]
          },
          {
              "type": "boolean",
              "difficulty": "hard",
              "category": "Linux",
              "question": "The `chmod 644` command grants read/write to owner and read-only to others.",
              "correct_answer": "True",
              "incorrect_answers": ["False"]
          },
          {
              "type": "boolean",
              "difficulty": "hard",
              "category": "Linux",
              "question": "The `ls -lia` command displays a detailed list with inode numbers.",
              "correct_answer": "True",
              "incorrect_answers": ["False"]
          },
          {
              "type": "boolean",
              "difficulty": "hard",
              "category": "Linux",
              "question": "The `rm -rf /tmp/*` command deletes all files and directories in `/tmp` recursively.",
              "correct_answer": "True",
              "incorrect_answers": ["False"]
          },
          {
              "type": "boolean",
              "difficulty": "hard",
              "category": "Linux",
              "question": "The `grep -R` command searches for a string in multiple files recursively.",
              "correct_answer": "True",
              "incorrect_answers": ["False"]
          },
        {
            "type": "boolean",
            "difficulty": "hard",
            "category": "Linux",
            "question": "The `find / -type f -size +100M` command finds all files larger than 100 MB in the root directory.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "type": "boolean",
            "difficulty": "hard",
            "category": "Linux",
            "question": "The `ps aux` command lists all running processes on the system.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "type": "boolean",
            "difficulty": "hard",
            "category": "Linux",
            "question": "The `du -sh` command shows the size of a directory in a human-readable format.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "type": "boolean",
            "difficulty": "hard",
            "category": "Linux",
            "question": "The `lsattr` command is used to display file attributes on an ext2 file system.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "type": "boolean",
            "difficulty": "hard",
            "category": "Linux",
            "question": "The `kill -9` command sends a SIGKILL signal to a process, terminating it forcefully.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
            "type": "boolean",
            "difficulty": "hard",
            "category": "Linux",
            "question": "The `df -T` command displays the type of file system and its usage for mounted partitions.",
            "correct_answer": "True",
            "incorrect_answers": ["False"]
        },
        {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `mkfs` command is used to create a file system on a partition.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `chmod 777 file` command gives read, write, and execute permissions to everyone.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `crontab -e` command allows editing scheduled cron jobs for the current user.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `/etc/fstab` file lists disk partitions and their mount points.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `lsof` command lists all open files on the system.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `nc` (Netcat) command is used for network debugging and creating TCP/UDP connections.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `tar -xvf archive.tar` command extracts files from the archive with detailed output.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `uname -r` command displays the kernel version of the Linux system.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `rsync` command is used for efficiently transferring and synchronizing files across systems.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `ip addr` command is used to display network interface details in modern Linux distributions.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `whoami` command displays the username of the current user.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `touch` command is used to change the timestamp of a file without modifying its contents.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `df -h` command shows disk usage in a human-readable format.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      },
      {
          "type": "boolean",
          "difficulty": "hard",
          "category": "Linux",
          "question": "The `useradd` command is used to create a new user in Linux.",
          "correct_answer": "True",
          "incorrect_answers": ["False"]
      }
            ]
          }
          const max_questions = `${numOfQuestions}`;
          var difficulty_level = `${difficulty}`;
          if(difficulty_level!='0'){
            data.results = data.results.filter(question => question.difficulty === difficulty_level);
          }
          var ques_type = `${questionsType}`;
          if(ques_type!='0'){
            data.results = data.results.filter(question => question.type === ques_type);
          }
          data.results = data.results.sort(() => Math.random() - 0.5).slice(0, max_questions);
          // data.results = data.results.filter(question => question.difficulty === difficulty_level).sort(() => Math.random() - 0.5).slice(0, max_questions);
          
          // console.log(data.results);

          // console.log(data["results"]);
          const { response_code, results } = data;

          if (response_code === 1) {
            const message = (
              <p>
                The API doesn't have enough questions for your query. (Ex.
                Asking for 10 Questions in a Category that only has 10.)
                <br />
                <br />
                Please change the <strong>No. of Questions</strong>,{' '}
                <strong>Difficulty Level</strong>, or{' '}
                <strong>Type of Questions</strong>.
              </p>
            );

            setProcessing(false);
            setError({ message });

            return;
          }

          results.forEach(element => {
            element.options = shuffle([
              element.correct_answer,
              ...element.incorrect_answers,
            ]);
          });

          setProcessing(false);
          startQuiz(
            results,
            countdownTime.hours + countdownTime.minutes + countdownTime.seconds
          );
        }, 1000)
      )
      .catch(error =>
        setTimeout(() => {
          if (!navigator.onLine) {
            setOffline(true);
          } else {
            setProcessing(false);
            setError(error);
          }
        }, 1000)
      );
  };

  if (offline) return <Offline />;

  return (
    <Container style={style}>
      <Segment style={style}>
        <Item.Group divided>
          <Item>
            <Item.Image src={mindImg} />
            <Item.Content>
              <Item.Header style={style}>
                <h1>The Ultimate Linux Quiz</h1>
              </Item.Header>
              {error && (
                <Message error onDismiss={() => setError(null)}>
                  <Message.Header>Error!</Message.Header>
                  {error.message}
                </Message>
              )}
              <Divider />
              <Item.Meta style={style}>
                <p>Click on play now to start quiz.</p>
                <br />
                

                <p>How many questions do you want in your quiz?</p>
                <Dropdown
                  style={style}
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  header="Select No. of Questions"
                  options={NUM_OF_QUESTIONS}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                />
                <br />
                <p>How difficult do you want your quiz to be?</p>
                <Dropdown
                style={style}
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty Level"
                  header="Select Difficulty Level"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                  disabled={processing}
                />
                <br />
                <p>Which type of questions do you want in your quiz?</p>
                <Dropdown
                style={style}
                  fluid
                  selection
                  name="type"
                  placeholder="Select Questions Type"
                  header="Select Questions Type"
                  options={QUESTIONS_TYPE}
                  value={questionsType}
                  onChange={(e, { value }) => setQuestionsType(value)}
                  disabled={processing}
                />
                <br />
                {
                /* <Dropdown
                style={style}
                  fluid
                  selection
                  name="category"
                  placeholder="Select Quiz Category"
                  header="Select Quiz Category"
                  options={CATEGORIES}
                  value={category}
                  onChange={(e, { value }) => setCategory(value)}
                  disabled={processing}
                />
                <br />
                <p>How many questions do you want in your quiz?</p>
                <Dropdown
                  style={style}
                  fluid
                  selection
                  name="numOfQ"
                  placeholder="Select No. of Questions"
                  header="Select No. of Questions"
                  options={NUM_OF_QUESTIONS}
                  value={numOfQuestions}
                  onChange={(e, { value }) => setNumOfQuestions(value)}
                  disabled={processing}
                />
                <br />
                <p>How difficult do you want your quiz to be?</p>
                <Dropdown
                style={style}
                  fluid
                  selection
                  name="difficulty"
                  placeholder="Select Difficulty Level"
                  header="Select Difficulty Level"
                  options={DIFFICULTY}
                  value={difficulty}
                  onChange={(e, { value }) => setDifficulty(value)}
                  disabled={processing}
                />
                <br />
                <p>Which type of questions do you want in your quiz?</p>
                <Dropdown
                style={style}
                  fluid
                  selection
                  name="type"
                  placeholder="Select Questions Type"
                  header="Select Questions Type"
                  options={QUESTIONS_TYPE}
                  value={questionsType}
                  onChange={(e, { value }) => setQuestionsType(value)}
                  disabled={processing}
                />
                <br /> */}
                <p>Please select the countdown time for your quiz.</p>
                <Dropdown
                style={style}
                  search
                  selection
                  name="hours"
                  placeholder="Select Hours"
                  header="Select Hours"
                  options={COUNTDOWN_TIME.hours}
                  value={countdownTime.hours}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                style={style}
                  search
                  selection
                  name="minutes"
                  placeholder="Select Minutes"
                  header="Select Minutes"
                  options={COUNTDOWN_TIME.minutes}
                  value={countdownTime.minutes}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
                <Dropdown
                style={style}
                  search
                  selection
                  name="seconds"
                  placeholder="Select Seconds"
                  header="Select Seconds"
                  options={COUNTDOWN_TIME.seconds}
                  value={countdownTime.seconds}
                  onChange={handleTimeChange}
                  disabled={processing}
                />
              </Item.Meta>
              <Divider />
              <Item.Extra style={style}>
                <Button
                  primary
                  size="big"
                  icon="play"
                  labelPosition="left"
                  content={processing ? 'Processing...' : 'Play Now'}
                  onClick={fetchData}
                  disabled={!allFieldsSelected || processing}
                />
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <br />
    </Container>
  );
};

Main.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Main;
