require 'date'

class Time
  CHECK_TIME_REGEX = /(^([0-1]?\d|2[0-3]?)\:([0-5]?\d)\:([0-5]?\d)$)/

  def validate(time)
    CHECK_TIME_REGEX === time
  end

  def parse_and_push_to_array(time1, time2)
    if validate(time1) && validate(time2)
      time1 = DateTime.parse(time1)
      time2 = DateTime.parse(time2)
      time_array = Array.new
      time_array.push(time1, time2)
      sum_total_each_unit(time_array)
      calculate_total
    else
      'Invalid Time'
    end
  end

  def sum_total_each_unit(time)
    @total_seconds, @total_minutes, @total_hours = 0, 0, 0
    for i in 0...time.length do
      @total_hours += time[i].hour
      @total_minutes += time[i].minute
      @total_seconds += time[i].second
    end
  end

  def calculate_total
    extra_minutes, @seconds = @total_seconds.divmod(60)
    @total_minutes += extra_minutes
    extra_hours, @minutes = @total_minutes.divmod(60)
    @total_hours += extra_hours
    @days, @hours = @total_hours.divmod(24)
    "The total time is #{ @days } day and #{ @hours }:#{ @minutes }:#{ @seconds }"
  end

end
