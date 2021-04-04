const OAuthClient = require(`disco-oauth`)
const config = require(`../assets/config.json`)

const client = new OAuthClient(config.ID, config.SECRET)
client.setRedirect(`${config.DASHBOARD_URL}/auth`);
client.setScopes('identify', 'guilds');


module.exports = client;