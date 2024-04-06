# QuizApp
React based quiz application with a static question bank. 

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

GAME FEATURES:

1.The quiz logic is based on the assumption that the 0th element of the answers array for each question is the correct answer.

2.The answers for each question are shuffled randomly before displaying.

3.Players have an option to either select an answer or skip the question by not selecting any option.

4.Upon selection:

   a) the selected option is highlighted in orange. All the options are now disabled for selection.

   b) after a sec, the logic to check if the selected option is correct or incorrect is done executing. Now if correct, the answer gets highlighted in green else in red.

   c) after another sec, the selection state resets and the next question is loaded with the new answer options enabled for selection.
   
   
5.Each question has a 10 sec timer. If the player does not answer within these 10 seconds, the question is automatically skipped and the next question gets loaded.

6.The quiz summary is displayed once all the questions are exhausted.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

SCREENSHOTS:

Each question loaded with a 10 sec timer and a list of answer options (This list gets shuffled everytime the question is loaded):

![image](https://github.com/AmishaP-03/QuizApp/assets/154746893/c390d96c-bc35-4163-a22c-7142d3d37719)

Upon selection, the selected option is highlighted in orange and the options are disabled:

![image](https://github.com/AmishaP-03/QuizApp/assets/154746893/45cd024d-2e0a-4a35-a71a-499a87ef703e)


After a sec, it gets highlighted in green or red if it was correct or incorrect respectively:

![image](https://github.com/AmishaP-03/QuizApp/assets/154746893/8d64c16b-47f9-49e3-b402-9acd6a40f317)


![image](https://github.com/AmishaP-03/QuizApp/assets/154746893/1430a9a4-9f2b-4c16-9bf0-760b45d190a9)

Quiz summary:

![image](https://github.com/AmishaP-03/QuizApp/assets/154746893/6e502e78-92fd-47a9-a1db-103bb62da8b2)



