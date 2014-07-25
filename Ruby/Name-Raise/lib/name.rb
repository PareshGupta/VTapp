require_relative '../lib/invalid_name_error.rb'

class Name
  CHECK_UPPERCASE_ALPHABETS = /[A-Z]/

  def initialize(firstname, lastname)
    @firstname = blank_name?(firstname) ? (raise InvalidNameError, 'First name is blank') : check_first_letter_capital!(firstname)
    @lastname = blank_name?(lastname) ? (raise InvalidNameError, 'Last name is blank') : lastname
  end

  def to_s
    "#{ @firstname } #{ @lastname }"
  end

  private
    def blank_name?(name)
      name.nil? || name.empty?
    end

    def check_first_letter_capital!(name)
      if name[0].match(CHECK_UPPERCASE_ALPHABETS)
        name
      else
        raise InvalidNameError, "First letter of the '#{ name }' is not capital"
      end
    end
end
