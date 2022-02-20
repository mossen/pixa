# Project brief
You can check this project here: https://pixa-mossen.vercel.app/
We need a website to let users browse photos from Pexels (see below notes on getting an
API key). There’s a ton of competition in the photo space online, so we need to stand out. We need a
solution that’s lighting fast to load with a snappy, responsive UI. We need to greet site visitors with a selection of curated photos and give them the ability to search our extensive catalog of quality photos
from professional photographers.

## Minimum requirements
Your solution needs to satisfy all of these. There are a couple specific server/client needs, but beyond
those, the implementation is up to you. Use any tools, libraries, and frameworks you think best
accomplish the task. (See below user stories for these requirements)
- Display 10 curated photos on the home screen. On the server side, consume the Curated
photos resource and return the necessary response to render the photos. We want this to be
instant so it should be server-side rendered
- Provide pagination for Curated photos. Paging should not cause a page refresh. From the
client side initiate the needed requests to allow the user to go forward and backward 10
photos at a time
- Provide a photo search. Searching should not cause a page refresh. Consume the photo search
resource and display the results to the user, along with pagination, if needed

<br>
<br>

# Solution design
## Next.js
Used Next.js to meet the some of the requirments such as:
- Performance and server side rendering
- Security, by running node.js on server to keep the Pexels API key safe and not exposed to frontend
Visit [https://nextjs.org/docs](https://nextjs.org/docs) to view the full documentation.

## VechaiUi + Tailwind CSS
Used Tailwind to help the timing and process, Tailwind is a mobile first css framework which helps with responsive.
[VechaiUi](https://www.vechaiui.com/tag)
[Tailwind CSS](https://tailwindcss.com/) [(v3.0)]

## Unit testing
[RTL](https://testing-library.com/docs/react-testing-library/intro/) is used for unit testing.
```bash
npm run test
```
## How to run
You need to add the Pexels API key to `.env.local` before running the application. You can get an API key by followng this instruction:

- Create a free Pexels account
  - https://www.pexels.com/onboarding
  - Follow “I want to download”
  - Complete the form. Make sure you use a valid email address
- Confirm your email
- Visit the Image & Video API section of your account
- Provide a description and a URL. These can be fake, feel free to use the examples below or
write your own
  - Example description: “I’m using the API for programming practice projects”
  - Example URL: https://example.com

After adding the API key run following commands:
```bash
npm i
```
and then:
```bash
npm run dev
```
