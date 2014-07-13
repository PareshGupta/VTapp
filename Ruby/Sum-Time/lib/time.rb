require 'date'

class Time
  CHECK_TIME_REGEX = /(^([0-1]?\d|2[0-3]?)\:([0-5]?\d)\:([0-5]?\d)$)/
  attr_reader :total_hours, :total_minutes, :total_seconds

  def validate(time)
    CHECK_TIME_REGEX === time
  end

  def parse_and_calculate_total_units(time1, time2)
    if validate(time1) && validate(time2)
      time1 = DateTime.parse(time1)
      time2 = DateTime.parse(time2)
      @total_hours = time1.hour + time2.hour
      @total_minutes = time1.minute + time2.minute
      @total_seconds = time1.second + time2.second 
    else
      'Invalid Time'
    end
  end

  def sum(time1, time2)
    parse_and_calculate_total_units(time1, time2)
    extra_minutes, seconds = total_seconds.divmod(60)
    @total_minutes += extra_minutes
    extra_hours, minutes = total_minutes.divmod(60)
    @total_hours += extra_hours
    days, hours = total_hours.divmod(24)
    "The total time is #{ days } day and #{ hours }:#{ minutes }:#{ seconds }"
  end

end
