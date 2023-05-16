/**
 * Contains the miscellaneous route handlers.
 * @author Abolarinwa Temitope Sam <https://github.com/Temitopesam1>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
