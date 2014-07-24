require_relative '../lib/invalid_name_error.rb'

class Name
  CHECK_UPPERCASE_ALPHABETS = /[A-Z]/

  def initialize(firstname, lastname)
    @firstname = blank_name?(firstname) ? check_first_letter_capital!(firstname) : (raise InvalidNameError, 'First name is blank')
    @lastname = blank_name?(lastname) ? lastname : (raise InvalidNameError, 'Last name is blank')
  end

  def to_s
    "#{ @firstname } #{ @lastname }"
  end

  private
    def blank_name?(name)
      !(name.nil? || name.empty?)
    end

    def check_first_letter_capital!(name)
      if name[0].match(CHECK_UPPERCASE_ALPHABETS)
        name
      else
        raise InvalidNameError, "First letter of the '#{ name }' is not capital"
      end
    end
end
