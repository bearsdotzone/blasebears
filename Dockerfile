FROM alpine
RUN apk add --update npm git
RUN printenv
RUN git clone ${{ github.repository }}

WORKDIR blasebears
RUN npm install
RUN npm build
ENTRYPOINT npm start
EXPOSE 3000