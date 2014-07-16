require 'date'

class Time
  CHECK_TIME_REGEX = /(^([0-1]?\d|2[0-3]?)\:([0-5]?\d)\:([0-5]?\d)$)/

  def valid?(time)
    CHECK_TIME_REGEX === time
  end

  def parse_and_calculate_total_units(time1, time2)
    if valid?(time1) && valid?(time2)
      time1 = DateTime.parse(time1)
      time2 = DateTime.parse(time2)
      @@total_hours = time1.hour + time2.hour
      @@total_minutes = time1.minute + time2.minute
      @@total_seconds = time1.second + time2.second
    end
  end

  def self.sum(time1, time2)
    new.parse_and_calculate_total_units(time1, time2)
    extra_minutes, seconds = @@total_seconds.divmod(60)
    @@total_minutes += extra_minutes
    extra_hours, minutes = @@total_minutes.divmod(60)
    @@total_hours += extra_hours
    day, hours = @@total_hours.divmod(24)
    if day == 0
      "The total time is #{ hours }:#{ minutes }:#{ seconds }"
    else
      "The total time is #{ day } day and #{ hours }:#{ minutes }:#{ seconds }"
    end
  end

end
