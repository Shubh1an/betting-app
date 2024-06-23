class regexCollection {
    //Validation Regex
    static requiredString = /^(\S+)$/;
    static stringNumber = /^[0-9]*$/;
    static alphabets = /^[a-zA-Z]*$/;
    //
    static FullName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/;
    static FileRegex = /((content|file):\/)?\/.*/;
    static FileName = /^.*[\\\/]/;
    static FileExtension = /(?:\.([^.]+))?$/;
    static SpaceNotAllowed = /^[a-zA-Z]*$/;
    static Email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    static CompanyName = /^[ A-Za-z0-9_@.#&+-]*$/;
    static Password =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/;
    static PasswordLowerUpper =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    static SpaceString = /^[a-zA-Z]*$/;
    static NumberString = /^[a-zA-Z0-9]*$/;
    static Number = /^[0-9]*$/;
    static Mobile = /^[0-9]{10}$/;
  }
  
  export default regexCollection;